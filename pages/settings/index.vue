<!--
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 15:19:50
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 18:04:53
-->
<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form @submit.prevent="onSubmit">
          <fieldset>
              <fieldset class="form-group">
                <input class="form-control" v-model="user.image" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.username" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea class="form-control form-control-lg" v-model="user.bio" rows="8" placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.email" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" v-model="user.password" type="password" placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
  const Cookie = process.client ? require('js-cookie') : undefined
  import { updateUser } from '@/api/user'
  export default {
    middleware: ['authenticated'],
    name: 'SettingIndex',
    data () {
      return {
        user: {
          email: '',
          username: '',
          password: '',
          image: '',
          bio: ''
        }
      }
    },
    methods: {
      async onSubmit () {
        const data = {}
        if(this.user.username) data.username = this.user.username
        if(this.user.password) data.password = this.user.password
        if(this.user.bio) data.bio = this.user.bio
        if(this.user.image) data.image = this.user.image
        if(this.user.email) data.email = this.user.email
        try {
          const res = await updateUser(data)
          console.log('res--->', res)
          this.$store.commit('setUser', res.data.user)
          Cookie.set('user', res.data.user)
          this.$router.push('/')
        } catch(error) {
          console.log('update user error--->', error)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>