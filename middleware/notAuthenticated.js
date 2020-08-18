/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 18:06:35
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 18:06:52
 */
export default function({ store, redirect }) {
  if(store.state.user) {
    return redirect('/')
  }
}