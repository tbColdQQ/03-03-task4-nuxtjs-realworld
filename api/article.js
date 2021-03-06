/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 18:24:07
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 18:30:21
 */
import { request } from '@/plugins/request'

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
    params
  })
}

export const addFavorite = slug => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/favorite`,
  })
}

export const deleteFavorite = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}/favorite`,
  })
}

export const getArticle = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}`
  })
}

export const getComments = slug => {
  return request({
    method: 'GET',
    url: `/api/articles/${slug}/comments`
  })
}

export const createArticle = article => {
  return request({
    method: 'POST',
    url: `/api/articles`,
    data: {article}
  })
}

export const addComment = (slug, content) => {
  return request({
    method: 'POST',
    url: `/api/articles/${slug}/comments`,
    data: {comment: {body: content}}
  })
}

export const deleteArticle = slug => {
  return request({
    method: 'DELETE',
    url: `/api/articles/${slug}`
  })
}

export const updateArticle = article => {
  return request({
    method: 'PUT',
    url: `/api/articles/${article.slug}`,
    data: {article}
  })
}