import axios from 'axios'

// todo - emitir erro de falta de .env
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const apiCoin = axios.create({
  baseURL: 'https://rest.coinapi.io/v1',
})

apiCoin.defaults.headers.common['X-CoinAPI-Key'] = API_KEY

export const apiJson = axios.create({
  baseURL: 'http://localhost:3005',
})
