import { BASE_URL, TIME_OUT } from './config'
import LeeRequest from './request'

const leeRequest = new LeeRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default leeRequest
