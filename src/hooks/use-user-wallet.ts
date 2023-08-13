import { useCallback, useContext, useEffect, useState } from 'react'
import { useCryptos } from './use-cryptos'
import { apiJson } from '@/lib/axios'
import { WalletInfo } from '@/@types/wallet-info'
import { useLoader } from './use-loader'
import { WalletContext } from '@/contexts/WalletContext'

export type CryptoUser = {
  cryptoName: string
  cryptoCode: string
  cryptoImageUrl: string
  cryptoChange: number

  value: number
  amount: number
}

export function useUserWallet(user_id: string) {
  // const [userTable, setUserTable] = useState<CryptoUser[] | undefined>()
  const [isCryptosLoading, setIsCryptoLoading] = useState(true)
  const { cryptos } = useCryptos()
  const { setUserTable, userTable } = useContext(WalletContext)

  const { showLoader, hideLoader } = useLoader()

  /*
   * cruza as informações da carteira do usuário
   * com os valores atuais das moedas vindas da API
   * e retorna os dados necessários para a interface gráfica.
   */
  const getUserTable = useCallback(
    async (userId: string) => {
      if (!cryptos.length) {
        return undefined
      }
      setIsCryptoLoading(true)
      const { data } = await apiJson.get<WalletInfo[]>(
        `/wallets?user_id=${userId}`,
      )
      const userTable = [] as CryptoUser[]
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
      setIsCryptoLoading(false)

      return userTable
    },
    [cryptos],
  )

  async function loadData() {
    if (setUserTable) {
      setUserTable([])
      const data = await getUserTable(user_id)
      await setUserTable(data)
    }
  }

  useEffect(() => {
    loadData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUserTable, user_id])

  useEffect(() => {
    if (showLoader && hideLoader) {
      if (isCryptosLoading) {
        showLoader()
      } else {
        hideLoader()
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCryptosLoading])

  return { userTable, loadData }
}
