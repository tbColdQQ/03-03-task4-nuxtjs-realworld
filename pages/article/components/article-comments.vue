<template>
  <div>
    <form class="card comment-form" @submit.prevent="onSubmit">
      <div class="card-block">
        <textarea class="form-control" v-model="content" placeholder="Write a comment..." rows="3"></textarea>
      </div>
      <div class="card-footer">
        <img :src="user.image" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">
          Post Comment
        </button>
      </div>
    </form>
    
    <div class="card" v-for="comment in comments" :key="comment.id">
      <div class="card-block">
        <p class="card-text">{{comment.body}}</p>
      </div>
      <div class="card-footer">
        <nuxt-link :to="{name: 'profile', params: {username: comment.author.username}}" class="comment-author">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link :to="{name: 'profile', params: {username: comment.author.username}}" class="comment-author">{{comment.author.username}}</nuxt-link>
        <span class="date-posted">{{comment.createdAt | date('MMM DD, YYYY')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { getComments, addComment } from '@/api/article'
  import { mapState } from 'vuex'
  export default {
    name: 'ArticleComments',
    computed: {
      ...mapState(['user'])
    },
    data () {
      return {
        comments: [],
        content: ''
      }
    },
    props: {
      article: {
        type: Object,
        required: true
      }
    },
    async mounted () {
      const { data } = await getComments(this.article.slug)
      this.comments = data.comments
    },
    methods: {
      async onSubmit () {
        const { data } = await addComment(this.article.slug, this.content)
        this.comments.push(data.comment)
        this.content = ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>