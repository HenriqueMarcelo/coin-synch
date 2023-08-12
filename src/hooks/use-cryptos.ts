import { CryptoInfo } from '@/@types/crypto-info'
import { getCryptos } from '@/api/cryptos'
import { useEffect, useState } from 'react'

export function useCryptos() {
  const [cryptos, setCryptos] = useState<CryptoInfo[]>([])
  const [isCryptosLoading, setIsCryptoLoading] = useState(true)

  useEffect(() => {
    async function aux() {
      setIsCryptoLoading(true)
      setCryptos(await getCryptos())
      setIsCryptoLoading(false)
    }
    aux()
  }, [])

  return { cryptos, isCryptosLoading }
}
