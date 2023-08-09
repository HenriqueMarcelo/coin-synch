import axios from 'axios'

const API_KEY = '15D675AC-4887-4157-9037-3D8E175454C9'

export const coinApi = axios.create({
  baseURL: 'https://rest.coinapi.io/v1',
})

coinApi.defaults.headers.common['X-CoinAPI-Key'] = API_KEY

export const jsonApi = axios.create({
  baseURL: 'http://localhost:3005',
})
