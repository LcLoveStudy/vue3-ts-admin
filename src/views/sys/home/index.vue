<template>
  <el-link type="primary" @click="toCodeBase">
    <el-icon size="20"><Link /></el-icon>
    <span class="phone:text-6xl phone:ml-[8px] tablet:text-xl tablet:ml-2">源码仓库</span>
  </el-link>
  <collection-comp class="phone:mt-[16px] tablet:mt-4" />
</template>

<script setup lang="ts">
  import CollectionComp from './components/collection.vue'
  const toCodeBase = () => {
    window.open('https://github.com/LcLoveStudy/vue3-ts-admin')
  }
</script>
