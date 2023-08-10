<template>
  <autoPagination
    v-model:current="current"
    v-model:size="size"
    :total="130"
    @current-change="change"
  />
</template>

<script setup lang="ts">
  import autoPagination from '@/components/auto-pagination/index.vue'
  const current = ref(1)
  const size = ref(10)
  const change = () => {
    console.log(current.value, size.value)
  }
</script>

<style scoped></style>
