<script setup lang="ts">

</script>

<template>
  <div class="welcome">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <p> 这是一个基于 Vue3+Elem·entUI制作的算法可视化演示网站</p>
    <p> 使用方法：点击右上角算法演示，在弹出的下拉菜单里选择要看的算法演示</p>
  </div>
</template>

<style scoped lang="sass">

.logo
  height: 6em
  padding: 1.5em
  will-change: filter
  transition: filter 300ms

.logo:hover
  filter: drop-shadow(0 0 2em #646cffaa)

.logo.vue:hover
  filter: drop-shadow(0 0 2em #42b883aa)

</style>