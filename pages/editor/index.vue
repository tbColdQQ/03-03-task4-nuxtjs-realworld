<!--
 * @Descripttion: 
 * @version: 
 * @Author: jie.niu
 * @Date: 2020-08-18 15:21:23
 * @LastEditors: jie.niu
 * @LastEditTime: 2020-08-18 18:02:57
-->
<template>
  <div class="editor-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-10 offset-md-1 col-xs-12">
        <form>
          <fieldset>
            <fieldset class="form-group">
                <input type="text" v-model="article.title" class="form-control form-control-lg" placeholder="Article Title" required>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" v-model="article.description" class="form-control" placeholder="What's this article about?" required>
            </fieldset>
            <fieldset class="form-group">
                <textarea class="form-control" v-model="article.body" rows="8" placeholder="Write your article (in markdown)" required></textarea>
            </fieldset>
            <fieldset class="form-group">
                <input type="text" class="form-control" v-model="tag" placeholder="Enter tags" @keyup.enter="addTag">
                <div class="tag-list" v-for="item in article.tagList" :key="item">{{item}}</div>
            </fieldset>
            <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="onSubmit">
                Publish Article
            </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
  import  { createArticle, getArticle, updateArticle } from '@/api/article'
  import { mapState } from 'vuex'
  export default {
    middleware: ['authenticated'],
    name: 'Editor',
    data() {
      return {
        tag: '',
        article: {
          slug: '',
          title: '',
          description: '',
          body: '',
          tagList: []
        }
      }
    },
    async asyncData (query) {
      let slug = query.params.slug
      if(slug) {
        const { data } = await getArticle(slug)
        return {
          article: data.article
        }
      }else {
        return {
          article: {}
        }
      }
    },
    methods: {
      async onSubmit(e) {
        try {
          if(this.article.slug) {
            const { data } = await updateArticle(this.article)
          }else {
            const { data } = await createArticle(this.article)
          }
          this.$router.push('/')
        } catch(error) {
          console.log('add article error', error)
        }
      },
      addTag () {
        if(this.article.tagList.indexOf(this.tag) < 0) {
          this.article.tagList.push(this.tag)
        }
        this.tag = ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>