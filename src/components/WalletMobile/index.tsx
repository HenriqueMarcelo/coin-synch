import './styles.scss'
import Image from 'next/image'
import J1Svg from '@/assets/j1.svg'
import J2Svg from '@/assets/j2.svg'
import { useModal } from '@/hooks/use-modal'
import { Change } from '../Change'
import { convertNumberToUsd } from '@/utils/convert-number-to-USD'
import Image404Png from '@/assets/404.png'
import { useUserWallet } from '@/hooks/use-user-wallet'

export function WalletMobile() {
  const { openAddCryptoModal, openTransferCryptoModal } = useModal()

  // todo fix user
  const { userTable } = useUserWallet('1')

  if (!userTable) {
    return null
  }

  return (
    <section className="">
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
          + <span>Add crypto</span>
        </button>
      </header>

      {userTable.length ? (
        <div className="wallet-mobile__container container">
          {userTable.map((userRow) => (
            <div
              className="dashboard__card dashboard__card--mini"
              key={userRow.cryptoCode}
            >
              <div className="wallet-mobile__header">
                <Image
                  src={userRow.cryptoImageUrl || Image404Png}
                  alt={userRow.cryptoCode}
                  width={32}
                  height={32}
                  className="wallet-mobile__image"
                />
                <span>
                  {userRow.cryptoName}{' '}
                  <span className="wallet-mobile__acronym">
                    {userRow.cryptoCode}
                  </span>
                </span>
              </div>
              <div className="wallet-mobile__body">
                <span className="regular__small-label">Holdings</span> <br />
                <span className="regular__label regular__label--text-base">
                  {convertNumberToUsd(userRow.value)}
                </span>
                <br />
                <span className="regular__small-label regular__small-label--yellow">
                  {userRow.amount} {userRow.cryptoCode}
                </span>
                <hr className="wallet-mobile__hr" />
                <span className="regular__small-label">Change</span> <br />
                <span className="regular__label ">
                  <Change value={userRow.cryptoChange} percentage />
                </span>{' '}
                <br />
                <button
                  className="wallet-mobile__button"
                  onClick={() => openTransferCryptoModal(userRow)}
                >
                  Trade
                </button>
              </div>
            </div>
          ))}
        </div>
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
