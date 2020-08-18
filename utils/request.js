/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 15:44:06
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 16:24:53
 */
import axios from 'axios'

const request = axios.create({
  baseURL: 'https://conduit.productionready.io',
})

export default request