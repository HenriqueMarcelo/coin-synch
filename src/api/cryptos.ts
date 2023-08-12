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
  // const topCryptos = await apiJson.get<string[]>('top-cryptos')
  // const topCryptosData = await apiCoin.get<CryptoDataAPI[]>(
  //   `assets/${topCryptos.data}`,
  // )
  const topCryptosData = await apiJson.get<CryptoDataAPI[]>(`mock-coin`)
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
