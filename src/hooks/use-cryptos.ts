import { CryptoInfo } from '@/@types/crypto-info'
import { getCryptos } from '@/api/cryptos'
import { useEffect, useState } from 'react'
import { useLoader } from './use-loader'

export function useCryptos() {
  const [cryptos, setCryptos] = useState<CryptoInfo[]>([])
  const [isCryptosLoading, setIsCryptoLoading] = useState(true)

  const { showLoader, hideLoader } = useLoader()

  useEffect(() => {
    async function aux() {
      setIsCryptoLoading(true)
      setCryptos(await getCryptos())
      setIsCryptoLoading(false)
    }
    aux()
  }, [])

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

  return { cryptos, isCryptosLoading }
}
