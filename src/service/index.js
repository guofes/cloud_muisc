import axios from 'axios'
import api from './api'


const REQUEST_METHOD_MAP = {
  POST: 'post',
  GET: 'get'
}
// let port = 3000
// let host = '://localhoost:' + port
// let baseURL = 'http' + host
let api_name = [...api, ]
let baseURL = '/api'
let axiosConfig = {
  baseURL,
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  },
}

function Service() {
  // let services = []
  let _this = this
  let _http = axios.create(axiosConfig)


  // search = params => {
  //   return _http.get('/search', params || {})

  // }

  api_name.forEach(item => {
    let {
      subUrl,
      name,
      method,
      module
    } = item
    _this[name] = params => {
      _http.defaults['module'] = module
      if (method === REQUEST_METHOD_MAP.GET) {
        return _http.get(subUrl, params || {})
      }
      if (method === REQUEST_METHOD_MAP.POST) {
        return _http.post(subUrl, params || {})
      }
    }
  })
}

export default new Service()