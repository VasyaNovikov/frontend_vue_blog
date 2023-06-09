<template>
  <div class="post" v-if="post">
    <h2>{{ post.title }}: {{ post.subtitle }}</h2>
    <p class="post__description">{{ post.metaDescription }}</p>
    <div>{{ displayableDate(post.publishDate) }}</div>
    <article>
      {{ post.body }}
    </article>
    <div class="post__btns" v-for="tag in post.tags" :key="tag.name">
      <my-button style="margin-top: 10px; margin-bottom: 5px; background: #FFEBCD" @click="$router.push(`/tag/${tag.name}`)">#{{ tag.name }}</my-button>
    </div>
    <AuthorLink :author="post.author"/>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import AuthorLink from '@/components/UI/AuthorLink'

export default {
  name: 'VPost',
  components: {
    AuthorLink,
  },
  data () {
    return {
      post: null,
    }
  },
  methods: {
    displayableDate (date) {
      return new Intl.DateTimeFormat(
        'en-US',
        { dateStyle: 'full' },
      ).format(new Date(date))
    }
  },
  async created () {
    const post = await this.$apollo.query({
        query: gql`query ($slug: String!) {
          postBySlug(slug: $slug) {
            title
            subtitle
            publishDate
            metaDescription
            slug
            body
            author {
              user {
                username
                firstName
                lastName
              }
            }
            tags {
              name
            }
          }
        }`,
        variables: {
          slug: this.$route.params.slug,
        },
    })
    this.post = post.data.postBySlug
  },
}
</script>

<style>
.post {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background: #F9F4F3;
  box-shadow: 2px 2px 4px gray;
  border-radius: 4px;
  margin-bottom: 5px;
}
article {
  margin-top: 5px;
}

</style>