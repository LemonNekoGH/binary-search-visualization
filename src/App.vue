<script setup lang="ts">

import TopNavibar from "./components/TopNavibar.vue";
</script>

<template>

  <div class="common-layout">
    <el-container>
      <el-header>
        <top-navibar/>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>

</template>

<style scoped lang="sass">
.common-layout
  width: 100%
  height: auto

</style>
