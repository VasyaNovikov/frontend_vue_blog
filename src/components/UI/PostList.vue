<template>
  <div>
    <div class="post-list">
      <div class="post"
        v-for="post in publishedPosts"
        :key="post.title"
      >
        <span class="post__title">
           <router-link :to="`/post/${post.slug}`">
             {{ post.title }}: {{ post.subtitle }}
           </router-link>
        </span>
        <p class="post__description">{{ post.metaDescription }}</p>
        <div class="post__date">{{ displayableDate(post.publishDate) }}</div>
        <span v-if="showAuthor">
           author <AuthorLink :author="post.author" />
        </span>
        <div class="post__btns" v-for="tag in post.tags" :key="tag.name">
           <my-button style="margin-top: 5px; background: #FFEBCD" @click="$router.push(`/tag/${tag.name}`)">#{{ tag.name }}</my-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorLink from '@/components/UI/AuthorLink'

export default {
  name: 'PostList',
  components: {
    AuthorLink,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    showAuthor: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    publishedPosts () {
      return this.posts.filter(post => post.published)
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
}
</script>

<style>
.post-list {
  list-style: none;
}



.post__title {
  font-size: 1.25rem;
}

.post__description {
  color: #777;
  font-style: italic;
}

.post__btns {
  list-style: none;
  font-weight: bold;
  font-size: 0.8125rem;
}
</style>