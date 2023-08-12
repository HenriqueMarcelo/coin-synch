import { useCallback, useEffect, useState } from 'react'
import { useCryptos } from './use-cryptos'
import { apiJson } from '@/lib/axios'
import { WalletInfo } from '@/@types/wallet-info'
import { useLoader } from './use-loader'

export type CryptoUser = {
  cryptoName: string
  cryptoCode: string
  cryptoImageUrl: string
  cryptoChange: number

  value: number
  amount: number
}

export function useUserWallet(user_id = '1') {
  const [userTable, setUserTable] = useState<CryptoUser[] | undefined>()
  const [isCryptosLoading, setIsCryptoLoading] = useState(true)
  const { cryptos } = useCryptos()

  const { showLoader, hideLoader } = useLoader()

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

  useEffect(() => {
    async function aux() {
      setUserTable(await getUserTable(user_id))
    }
    aux()
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

  return { userTable }
}
