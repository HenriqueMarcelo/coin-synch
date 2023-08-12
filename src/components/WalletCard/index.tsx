import Image from 'next/image'
import { MyTooltip } from '../MyTooltip'

import TradeButtonSvg from '@/assets/TradeButton.svg'
import J1Svg from '@/assets/j1.svg'
import J2Svg from '@/assets/j2.svg'
import { useModal } from '@/hooks/use-modal'
import { Change } from '../Change'
import { convertNumberToUsd } from '@/utils/convert-number-to-USD'
import Image404Png from '@/assets/404.png'
import { useUserWallet } from '@/hooks/use-user-wallet'

type Props = {
  userId: string
}

export function WalletCard({ userId }: Props) {
  const { openAddCryptoModal, openTransferCryptoModal } = useModal()

  // todo fix user
  const { userTable } = useUserWallet(userId)

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
      {/* {userTable.length ? ( */}
      {userTable.length ? (
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
                    <button onClick={() => openTransferCryptoModal(userRow)}>
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
