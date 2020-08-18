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

export const getYourFeedArticles = params => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    params,
    headers: {
      Authorization: `Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEwNTU2LCJ1c2VybmFtZSI6InhpYW9uYWl5b3UiLCJleHAiOjE2MDI5NDcwNzh9.LMVSE5P2NWqPE6J8cCQNUmIV_5v1tu1Y5NBmqh4qik4`
    }
  })
}