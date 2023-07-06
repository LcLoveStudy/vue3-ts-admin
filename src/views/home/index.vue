<template>
  <div class="mb-20">
    home
  </div>
  <WangEditor/>
</template>

<script setup lang="ts">
import { getList } from '@/api'
import WangEditor from '@/components/wangEditor/index.vue'
getList({ page: 1 })
</script>

<style scoped></style>