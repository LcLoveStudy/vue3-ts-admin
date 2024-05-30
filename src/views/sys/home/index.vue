<template>
  <el-link type="primary" @click="toCodeBase">
    <el-icon size="20"><Link /></el-icon>
    <span class="text-xl ml-2">源码仓库</span>
  </el-link>
  <collection-comp class="mt-4" />
</template>

<script setup lang="ts">
  import CollectionComp from './components/collection.vue'
  const toCodeBase = () => {
    window.open('https://gitee.com/lichang666/v3-ts')
  }
</script>
