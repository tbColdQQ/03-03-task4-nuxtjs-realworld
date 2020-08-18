/*
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 18:00:52
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 18:01:37
 */
export default function({ store, redirect }) {
  if(!store.state.user) {
    return redirect('/login')
  }
}