<template>
  <h1 @click="goUtilsDoc" class="cursor-pointer text-blue-400 text-center text-4xl">
    前往工具库文档网站
  </h1>
</template>

<script setup lang="ts">
  const goUtilsDoc = () => {
    window.open('https://lclovestudy.github.io/-lichang666/')
  }
</script>
