<script setup lang="ts">

import BinaryDemo from "./components/BinaryDemo.vue";
</script>

<template>
  <div class="box">
    <h3 class="title">一个用Vue3制作的算法可视化示例</h3>
    <div class="box-sub">
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
      <p>左指针</p>
    </div>
    <div class="box-sub">
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <p>中指针</p>
    </div>
    <div class="box-sub">
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vite.svg" class="logo inverted" alt="Vue logo" />
      </a>
      <p>右指针</p>
    </div>
  </div>
  <binary-demo />
</template>

<style scoped lang="sass">



.box
  display: flex
  flex-direction: column
  flex-wrap: wrap
  justify-content: center
  align-items: center
  margin-bottom: 5em
  .title
    margin-bottom: 3em
  .box-sub
    display: flex
    font-size: large
    flex-direction: row

.inverted
  filter: invert(1)
</style>
