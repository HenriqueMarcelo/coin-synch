import { CryptoInfo } from '@/@types/crypto-info'
import { apiCoin, apiJson } from '@/lib/axios'
import { iconsLinks } from '@/storage/icons-links'

type AllCryptosPossible = keyof typeof iconsLinks
type CryptoChangeAPI = {
  crypto: AllCryptosPossible
  change: number
  history: number[]
}

type CryptoDataAPI = {
  price_usd: number
  name: string
  asset_id: AllCryptosPossible
}

export async function getCryptos() {
  let topCryptosData
  /*
   * Verifica se existe o valor no arquivo .env
   * se existir, faz as requisições para a API real
   * se não, faz as requisições para a API mock do Json-server
   */
  if (process.env.NEXT_PUBLIC_API_KEY) {
    const topCryptos = await apiJson.get<string[]>('top-cryptos')
    topCryptosData = await apiCoin.get<CryptoDataAPI[]>(
      `assets/${topCryptos.data}`,
    )
  } else {
    topCryptosData = await apiJson.get<CryptoDataAPI[]>(`mock-coin`)
  }

  const allCryptosChange = await apiJson.get<CryptoChangeAPI[]>('crypto-change')

  const topCryptosList = topCryptosData.data.map((cryptoData) => {
    const aux = allCryptosChange.data.find(
      (c) => c.crypto === cryptoData.asset_id,
    )
    const change = aux?.change || null
    const history = aux?.history || null

    return {
      change,
      history,
      code: cryptoData.asset_id,
      name: cryptoData.name,
      imageUrl: iconsLinks[cryptoData.asset_id],
      priceUsd: cryptoData.price_usd,
    } as CryptoInfo
  })

  return topCryptosList.sort((a, b) => b.priceUsd - a.priceUsd)
}
