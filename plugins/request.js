import axios from 'axios'
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})

export default context => {
  request.interceptors.request.use(function (config) {
    // Do something before request is sent
    const { user } = context.store.state
    if(user && user.token) {
      config.headers.Authorization = `Token ${context.store.state.user.token}`
    }
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error)
  })
}