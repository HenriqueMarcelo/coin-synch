import { useCallback, useEffect, useState } from 'react'
import { useCryptos } from './use-cryptos'
import { apiJson } from '@/lib/axios'
import { WalletInfo } from '@/@types/wallet-info'

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
  const { cryptos } = useCryptos()

  const getUserTable = useCallback(
    async (userId: string) => {
      if (!cryptos.length) {
        return undefined
      }
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

  return { userTable }
}
