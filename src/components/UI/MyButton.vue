<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  padding: 5px 10px;
  background: none;
  color: teal;
  border: 0;
  box-shadow: 2px 2px 4px gray;
  border-radius: 4px;
}
</style>