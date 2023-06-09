<template>
    <v-navbar></v-navbar>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script>
import VNavbar from "@/components/UI/VNavbar";
export default {
  name: 'App',
  components: {
    VNavbar
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.app {
  margin-top: 50px;
  padding: 20px;
}
</style>
