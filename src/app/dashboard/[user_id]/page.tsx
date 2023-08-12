'use client'

import Image from 'next/image'
import './page.scss'

import BalanceIconSvg from '@/assets/BalanceIcon.svg'
import Eduphants from '@/assets/Eduphants.png'

import { useUser } from '@/hooks/use-user'
import { WalletCard } from '@/components/WalletCard'
import { useUserWallet } from '@/hooks/use-user-wallet'
import { useEffect, useMemo } from 'react'
import { convertNumberToUsd } from '@/utils/convert-number-to-USD'
import { Chart } from '@/components/Chart'
import { useCryptos } from '@/hooks/use-cryptos'
import { Change } from '@/components/Change'
import { WalletMobile } from '@/components/WalletMobile'
import { useWidth } from '@/hooks/use-width'
import { useModal } from '@/hooks/use-modal'

type Params = {
  params: { user_id: string }
}

export default function Dashboard({ params: { user_id } }: Params) {
  const { cryptos } = useCryptos()
  const { user } = useUser(user_id)
  const { size } = useWidth()
  const { userTable } = useUserWallet(user_id)
  const { setUserId } = useModal()

  useEffect(() => {
    setUserId(user_id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user_id])

  const balance = useMemo(() => {
    const total = userTable?.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.value
    }, 0)
    if (typeof total !== 'number') {
      return 'Loading'
    }
    return convertNumberToUsd(Number(total))
  }, [userTable])

  const firstCrypto = cryptos[0]

  if (!user) {
    return null
  }

  return (
    <>
      <div className="container dashboard__row">
        {firstCrypto && (
          <>
            <div className="dashboard__card dashboard__card--mini dashboard__card--full-tablet">
              <div className="dashboard__balance">
                <Image src={BalanceIconSvg} alt="" />
                <div className="hide__mobile">
                  <h4 className="regular__h4">Balance in US$</h4>
                  <span className="regular__body">(approximately)</span>
                </div>
                <div className="show__mobile">
                  <h4 className="regular__h4">Balance </h4>
                  <span className="regular__body">in US$</span>
                </div>
              </div>
              <div className="dashboard__price">{balance}</div>
            </div>
            <div className="dashboard__card dashboard__card--mini">
              <div className="dashboard__variation">
                <small className="regular__small">Daily Variation</small>
                <div className="dashboard__acronym">
                  <Image
                    src={firstCrypto.imageUrl}
                    height={32}
                    width={32}
                    alt={firstCrypto.code}
                  />
                  {firstCrypto.code}
                </div>
                <span className="regular__body">
                  <Change value={firstCrypto.change} percentage />
                </span>
              </div>
              <Chart history={firstCrypto.history} />
            </div>

            <div className="dashboard__card dashboard__card--mini">
              <div className="dashboard__news">
                <div>
                  <small className="bold__label">NFT&apos;s NEWS</small>
                  <p className="regular__small-label">
                    New ElephantX NFT <br />
                    to be lauched!
                  </p>
                </div>
                <a
                  href=""
                  className="regular__small-label regular__small-label--yellow"
                >
                  Read more +
                </a>
              </div>
              <Image src={Eduphants} alt="" height={143} width={143} />
            </div>
          </>
        )}
      </div>
      <div className="container">
        {size === 'sm' ? (
          <WalletMobile userId={user_id} />
        ) : (
          <WalletCard userId={user_id} />
        )}
      </div>
    </>
  )
}
