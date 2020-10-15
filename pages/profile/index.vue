<!--
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 15:15:30
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 15:16:49
-->
<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{profile.username}}</h4>
            <p>
              {{profile.bio}}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn" v-if="profile.username != user.username" @click="handleFollow">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{profile.following ? `Unfollow ${profile.username}` : `Follow ${profile.username}`}} 
            </button>
            <button class="btn btn-sm btn-outline-secondary action-btn" v-else @click="goSettings">
              <i class="ion-gear-a"></i>
              &nbsp;
              Edit Profile Settings 
            </button>
          </div>

        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{unactive: isFav === true}" :to="'/profile/' + profile.username">My Articles</nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link class="nav-link" :class="{active: isFav === true}" :to="'/profile/' + profile.username + '/favourites'">Favorited Articles</nuxt-link>
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="article in articles" :key="article.slug">
            <div class="article-meta">
              <nuxt-link :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <!-- <a href="profile.html"><img src="http://i.imgur.com/Qr71crq.jpg" /></a> -->
              <div class="info">
                <nuxt-link class="author" :to="{
                name: 'profile',
                params: {
                  username: article.author.username
                }
              }">{{article.author.username}}</nuxt-link>
                <!-- <a href="" class="author">Eric Simons</a> -->
                <span class="date">{{article.createdAt | date('MMM DD, YYYY')}}</span>
              </div>
              <button class="btn btn-outline-primary btn-sm pull-xs-right" :class="{
                active: article.favorited
              }" @click="onFavorite(article)" :disabled="article.favoriteDisabled">
                <i class="ion-heart"></i> {{article.favoritesCount}}
              </button>
            </div>
            <nuxt-link :to="{
              name: 'article',
              params: {
                slug: article.slug
              }
            }" class="preview-link">
              <h1>{{article.title}}</h1>
              <p>{{article.description}}</p>
              <span>Read more...</span>
            </nuxt-link>
            <ul class="tag-list">
              <li class="tag-default tag-pill tag-outline" v-for="tag in article.tagList" :key="tag">{{tag}}</li>
            </ul>
          </div>


        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import { getArticles, addFavorite, deleteFavorite } from '@/api/article'
  import { getProfile, followUser, unFollowUser } from '@/api/user'
  export default {
    middleware: ['authenticated'],
    name: 'UserProfile',
    computed: {
      ...mapState(['user'])
    },
    async asyncData (query) {
      try {
        const [res, myArticlesRes, favArticlesRes] = await Promise.all([getProfile(query.params.username),
          getArticles({author: query.params.username}), getArticles({favorited: query.params.username})])
        // const { data } = await getProfile(query.params.username)
        // const myArticlesRes = await getArticles({author: query.params.username})
        // const favArticlesRes = await getArticles({favorited: query.params.username})
        console.log('get profile--->', res.data, myArticlesRes, favArticlesRes)
        const isFav = query.route.fullPath.indexOf('favourites') > 0
        let articles = isFav ? favArticlesRes.data.articles : myArticlesRes.data.articles
        articles.forEach(article => article.favoriteDisabled = false)
        return {
          profile: res.data.profile,
          username: query.params.username,
          followDisabled: false,
          myArticles: myArticlesRes.data.articles,
          favArticles: favArticlesRes.data.articles,
          isFav,
          articles
        }
      }catch(error) {
        console.log('get profile error--->', error)
      }
      return {
        profile: {
          image: '',
          username: '',
          bio: ''
        },
        username: query.params.username,
        followDisabled: false,
        isFav: false,
        articles: []
      }
    },
    methods: {
      goSettings() {
        this.$router.push('/settings')
      },
      async handleFollow() {
        if(!this.followDisabled) {
          this.followDisabled = true
          if(this.profile.following) {
            const { data } = await unFollowUser(this.username)
            this.profile.following = false
          }else {
            const { data } = await followUser(this.username)
            this.profile.following = true
          }
        }
        this.followDisabled = false
      },
      async onFavorite (article) {
        article.favoriteDisabled = true
        if(article.favorited) {
          await deleteFavorite(article.slug)
          article.favorited = false
          article.favoritesCount += -1
        }else {
          await addFavorite(article.slug)
          article.favorited = true
          article.favoritesCount += 1
        }
        article.favoriteDisabled = false
      }
    }
  }
</script>

<style lang="css" scoped>
  .unactive {
    background-color: transparent!important;
    color: white!important;
  }
</style>