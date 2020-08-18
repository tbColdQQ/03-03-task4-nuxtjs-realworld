/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 18:24:07
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 18:30:21
 */
import request from '@/utils/request'

export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params
  })
}