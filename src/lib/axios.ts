import axios from 'axios'

const API_KEY = '15D675AC-4887-4157-9037-3D8E175454C9'

export const apiCoin = axios.create({
  baseURL: 'https://rest.coinapi.io/v1',
})

apiCoin.defaults.headers.common['X-CoinAPI-Key'] = API_KEY

export const apiJson = axios.create({
  baseURL: 'http://localhost:3005',
})
