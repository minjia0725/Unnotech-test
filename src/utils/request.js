import axios from 'axios'

const service = axios.create({
  baseURL: 'https://fe-interview-api.unnotech.com/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
})

export default service
