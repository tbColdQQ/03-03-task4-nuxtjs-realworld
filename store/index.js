/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 17:04:03
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 17:23:08
 */
const cookieparser = process.server ? require('cookieparser') : undefined

export const state = () => {
  return {
    user: null
  }
}

export const mutations = {
  setUser (state, data) {
    state.user = data
  }
}

export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    let user = null
    if(req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        user = JSON.parse(parsed.user)
      } catch (err) {

      }
    }

    commit('setUser', user)
  }
}