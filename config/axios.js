import axios from 'axios'

const api = axios.create({
  baseURL: "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
  headers: {
    'X-CMC_PRO_API_KEY': process.env.api_key
  },
})

export default api 