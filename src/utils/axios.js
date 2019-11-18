import React from 'react'
import axios from 'axios'
import { BASE_URL } from './url'
import { getToken, removeToken } from './token'

axios.defaults.baseURL = BASE_URL

// 通过请求拦截器，携带toke过去
axios.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    // 对响应数据做点什么
    if (response.data.status === 400) {
      removeToken()
    }
    return response
  },
  error => {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

React.Component.prototype.$axios = axios

export { axios }
