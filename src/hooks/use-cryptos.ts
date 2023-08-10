import { CryptoInfo } from '@/@types/crypto-info'
import { getCryptos } from '@/api/cryptos'
import { useEffect, useState } from 'react'

export function useCryptos() {
  const [cryptos, setCryptos] = useState<CryptoInfo[]>([])

  useEffect(() => {
    async function aux() {
      setCryptos(await getCryptos())
    }
    aux()
  }, [])

  return { cryptos }
}
