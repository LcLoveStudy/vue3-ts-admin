<template>
  <div class="mb-20">
    home
  </div>
  <RichEditor/>
</template>

<script setup lang="ts">
import { getList } from '@/api'
import RichEditor from '@/components/richEditor/index.vue'
getList({ page: 1 })
</script>

<style scoped></style>