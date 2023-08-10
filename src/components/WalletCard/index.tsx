import Image from 'next/image'
import { MyTooltip } from '../MyTooltip'

import TradeButtonSvg from '@/assets/TradeButton.svg'
import J1Svg from '@/assets/j1.svg'
import J2Svg from '@/assets/j2.svg'
import { useModal } from '@/hooks/use-modal'
import { useCallback, useEffect, useState } from 'react'
import { WalletInfo } from '@/@types/wallet-info'
import { apiJson } from '@/lib/axios'
import { useCryptos } from '@/hooks/use-cryptos'
import { Change } from '../Change'
import { convertNumberToUsd } from '@/utils/convert-number-to-USD'
import Image404Png from '@/assets/404.png'

type UserTable = {
  cryptoName: string
  cryptoCode: string
  cryptoImageUrl: string
  cryptoChange: number

  value: number
  amount: number
}

export function WalletCard() {
  const [userTable, setUserTable] = useState<UserTable[] | undefined>()
  const { openAddCryptoModal } = useModal()
  const { cryptos } = useCryptos()

  const getUserTable = useCallback(
    async (userId: string) => {
      if (!cryptos.length) {
        return undefined
      }
      const { data } = await apiJson.get<WalletInfo[]>(
        `/wallets?user_id=${userId}`,
      )
      const userTable = [] as UserTable[]
      for (const wallet of data) {
        const cryptoInfo = cryptos.find(
          (crypto) => crypto.code === wallet.crypto,
        )
        if (cryptoInfo) {
          userTable.push({
            cryptoChange: cryptoInfo.change,
            cryptoCode: cryptoInfo.code,
            cryptoImageUrl: cryptoInfo.imageUrl,
            cryptoName: cryptoInfo.name,
            value: cryptoInfo.priceUsd * wallet.value,
            amount: wallet.value,
          })
        }
      }

      return userTable
    },
    [cryptos],
  )

  useEffect(() => {
    async function aux() {
      setUserTable(await getUserTable('1'))
    }
    aux()
  }, [getUserTable])

  console.log(userTable)

  if (!userTable) {
    return null
  }

  return (
    <section className="dashboard__card">
      <header className="dashboard__header">
        <span className="dashboard__title">
          <Image src={J1Svg} alt="" />
          My Wallet
        </span>
        <button
          type="button"
          className="dashboard__button"
          onClick={openAddCryptoModal}
        >
          + Add crypto
        </button>
      </header>
      {userTable ? (
        <table className="wallet-table__container">
          <thead>
            <tr>
              <th className="wallet-table__th">#</th>
              <th className="wallet-table__th">Crypto</th>
              <th className="wallet-table__th">Holdings</th>
              <th className="wallet-table__th">Change</th>
              <th className="wallet-table__th">Trade</th>
            </tr>
          </thead>
          <tbody>
            {userTable.map((userRow, index) => (
              <tr className="wallet-table__tr" key={userRow.cryptoCode}>
                <td className="wallet-table__small">0{index + 1}</td>
                <td className="wallet-table__td">
                  <Image
                    src={userRow.cryptoImageUrl || Image404Png}
                    alt={userRow.cryptoCode}
                    width={32}
                    height={32}
                    className="wallet-table__image"
                  />
                  {userRow.cryptoName}{' '}
                  <span className="wallet-table__acronym">
                    {userRow.cryptoCode}
                  </span>
                </td>
                <td className="wallet-table__td">
                  {convertNumberToUsd(userRow.value)} <br />
                  <span className="wallet-table__down">
                    {userRow.amount} {userRow.cryptoCode}
                  </span>
                </td>
                <td className="wallet-table__td">
                  <Change value={userRow.cryptoChange} percentage />
                </td>
                <td className="wallet-table__td">
                  <MyTooltip text="Transfer Crypto" side="bottom">
                    <button>
                      <Image src={TradeButtonSvg} alt="" />
                    </button>
                  </MyTooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty__container">
          <Image src={J2Svg} alt="" />
          <h2 className="empty__title">Nothing here yet...</h2>
          <h3 className="empty__text">Add a crypto and start earning</h3>
        </div>
      )}
    </section>
  )
}
