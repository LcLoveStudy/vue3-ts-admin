<template>
  <div>
    <div>
      home
    </div>
    <progress max="100" :value="80" />
  </div>
</template>

<script setup lang="ts">
import { getList } from '@/api/index'
getList({ page: 1 })
</script>

<style scoped></style>