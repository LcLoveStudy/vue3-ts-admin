<template>
  <div class="mb-20">
    home
  </div>
</template>

<script setup lang="ts">
import { getList } from '@/api'
getList({ page: 1 })
</script>

<style scoped></style>