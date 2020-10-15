<template>
  <div class="article-meta">
    <nuxt-link :to="{name: 'profile', params: {username: article.author.username}}"><img :src="article.author.image" /></nuxt-link>
    <div class="info">
      <nuxt-link :to="{name: 'profile', params: {username: article.author.username}}" class="author">{{article.author.username}}</nuxt-link>
      <span class="date">{{article.createdAt | date('MMMM DD, YYYY')}}</span>
    </div>
    <button v-if="user.username != article.author.username" class="btn btn-sm btn-outline-secondary" :class="{active: article.author.following}" @click="handleFollow">
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow {{article.author.username}} <span class="counter"></span>
    </button>
    <button v-if="user.username === article.author.username" class="btn btn-sm btn-outline-secondary" @click="goEditArticle">
      <i class="ion-edit"></i>
      &nbsp;
      Edit Article 
    </button>
    &nbsp;&nbsp;
    <button v-if="user.username != article.author.username" class="btn btn-sm btn-outline-primary" :class="{active: article.favorited}" @click="onFavorite" :disabled="favoriteDisabled">
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">({{article.favoritesCount}})</span>
    </button>
    <button v-if="user.username === article.author.username" class="btn btn-sm btn-outline-danger" @click="delArticle">
      <i class="ion-trash-a"></i>
      &nbsp;
      Delete Article
    </button>
  </div>
</template>

<script>
  import { addFavorite, deleteFavorite, deleteArticle } from '@/api/article'
  import { followUser, unFollowUser } from '@/api/user'
  import { mapState } from 'vuex'
  export default {
    name: 'ArticleMeta',
    computed: {
      ...mapState(['user'])
    },
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        followDisabled: false,
        favoriteDisabled: false
      }
    },
    methods: {
      async handleFollow() {
        if(!this.followDisabled) {
          this.followDisabled = true
          if(this.article.author.following) {
            const { data } = await unFollowUser(this.username)
            this.article.author.following = false
          }else {
            const { data } = await followUser(this.username)
            this.article.author.following = true
          }
        }
        this.followDisabled = false
      },
      async onFavorite () {
        this.favoriteDisabled = true
        if(this.article.favorited) {
          await deleteFavorite(this.article.slug)
          this.article.favorited = false
          this.article.favoritesCount += -1
        }else {
          await addFavorite(this.article.slug)
          this.article.favorited = true
          this.article.favoritesCount += 1
        }
        this.favoriteDisabled = false
      },
      goEditArticle () {
        this.$router.push('/editor/' + this.article.slug)
      },
      async delArticle () {
        await  deleteArticle(this.article.slug)
        this.$router.push('/')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>