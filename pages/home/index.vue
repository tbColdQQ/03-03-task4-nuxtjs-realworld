<!--
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 14:53:21
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 18:45:34
-->
<template>
    <div class="home-page">

  <div class="banner">
    <div class="container">
      <h1 class="logo-font">conduit</h1>
      <p>A place to share your knowledge.</p>
    </div>
  </div>

  <div class="container page">
    <div class="row">

      <div class="col-md-9">
        <div class="feed-toggle">
          <ul class="nav nav-pills outline-active">
            <li class="nav-item" v-if="user">
              <nuxt-link class="nav-link" :class="{active: tab === 'your_feed'}" :to="{name: 'home', query: {tab: 'your_feed'}}" exact>Your Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link exact class="nav-link" :class="{active: tab === 'global_feed'}" :to="{name: 'home'}">Global Feed</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link exact class="nav-link" v-if="tag" :class="{active: tab === 'tag'}" :to="{name: 'home', query: {tab: 'tag', tag: tag}}"># {{ tag }}</nuxt-link>
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
        </div>
        <nav>
          <ul class="pagination">
            <li class="page-item" v-for="item in totalPage" :key="item" :class="{
              active: page === item
            }">
              <nuxt-link class="page-link" :to="{
                name: 'home',
                query: {
                  page: item,
                  tag: $route.query.tag,
                  tab: tab
                }
              }">{{item}}</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="col-md-3">
        <div class="sidebar">
          <p>Popular Tags</p>

          <div class="tag-list">
            <nuxt-link :to="{name: 'home', query: {tag: item, tab: 'tag'}}" class="tag-pill tag-default" v-for="item in tags" :key="item">{{item}}</nuxt-link>
          </div>
        </div>
      </div>

    </div>
  </div>

</div>
</template>

<script>
  import { getArticles, getYourFeedArticles, addFavorite, deleteFavorite } from '@/api/article'
  import { getTags } from '@/api/tag'
  import { mapState } from 'vuex'
  export default {
    name: 'HomeIndex',
    async asyncData ({ query }) {
      const page = Number.parseInt(query.page || 1)
      const limit = 20
      const tab = query.tab || 'global_feed'
      const tag = query.tag
      console.log('query--->', query, tab, tag)
      const loadArticles = tab === 'global_feed' ? getArticles : tab === 'tag' ? getArticles : getYourFeedArticles
      const [ articleRes, tagRes ] = await Promise.all([
        loadArticles({
          limit,
          offset: (page - 1) * limit,
          tag
        }),
        getTags()
      ])

      const { articles, articlesCount} = articleRes.data
      const { tags } = tagRes.data

      articles.forEach(article => article.favoriteDisabled = false)

      return {
        articles,
        articlesCount,
        tags,
        limit,
        page,
        tab,
        tag
      }
    },
    watchQuery: ['page', 'tag', 'tab'],
    computed: {
      totalPage () {
        return Math.ceil(this.articlesCount / this.limit)
      },
      ...mapState(['user'])
    },

    methods: {
      async onFavorite (article) {
        article.favoriteDisabled = true
        console.log(article)
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

<style lang="scss" scoped>

</style>