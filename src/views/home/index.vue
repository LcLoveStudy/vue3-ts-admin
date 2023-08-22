<template>
  <div class="mb-20 fs-20 fw-700">home</div>
</template>

<script setup lang="ts">
  import { getList } from '@/api'

  getList({ page: 1 }).then((res) => {
    // console.log(res.info.name)
  })
</script>

<style scoped></style>
