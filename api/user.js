/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 15:58:41
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 16:01:39
 */
import { request } from '@/plugins/request'

export const login = data => {
  return request({
    method: 'POST',
    url: '/api/users/login',
    data
  })
}

export const register = data => {
  return request({
    method: 'POST',
    url: '/api/users',
    data
  })
}

export const updateUser = user => {
  return request({
    method: 'PUT',
    url: '/api/user',
    data: {user: user}
  })
}

export const followUser = username => {
  return request({
    method: 'POST',
    url: `/api/profiles/${username}/follow`
  })
}

export const unFollowUser = username => {
  return request({
    method: 'DELETE',
    url: `/api/profiles/${username}/follow`
  })
}

export const getProfile = username => {
  return request({
    method: 'GET',
    url: `/api/profiles/${username}`
  })
}