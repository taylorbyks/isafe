import axios from 'axios'

const api = axios.create({
  baseURL: 'https://4cc7c9fc171c.ngrok.io',
})

export default api
