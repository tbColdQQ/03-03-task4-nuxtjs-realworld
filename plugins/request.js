import axios from 'axios'
export const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
  // baseURL: 'http://realworld.api.fed.lagounews.com'
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

  request.interceptors.response.use(function(response) {
    // console.log('response--->', response)
    if(response.data.status === 401) {
      window.location.hash = 'login'
      window.location.reload()
    }
    return response
  }, function(error) {
    console.log('error response--->', error.response)
    if(error.response.status === 401) {
      window.location.href = '/login'
      // window.location.reload()
    }
    return Promise.reject(error.response.data)
  })
}