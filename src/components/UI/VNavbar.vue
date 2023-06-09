<template>
  <div class="navbar">
    <div @click="$router.push('/pages')">Blog</div>
    <div class="navbar__btns">
      <my-button style="margin-left: 8px" @click="$router.push('/')">FreshPublishedPosts</my-button>
      <my-button style="margin-left: 8px" @click="$router.push('/')">CompositionApi</my-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
   height: 50px;
   background-color: lightblue;
   box-shadow: 2px 2px 4px gray;
   display: flex;
   align-items: center;
   padding: 0 15px;
   position: fixed;
   top: 0;
   width: 100%;
}

.navbar__btns {
   margin-left: auto;
}

</style>