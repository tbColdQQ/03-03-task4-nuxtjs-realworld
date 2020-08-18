/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 15:58:41
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 16:01:39
 */
import request from '@/utils/request'

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