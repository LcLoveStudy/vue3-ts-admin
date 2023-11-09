<template>
  <div>
    <text-ellipsis :text="text" ellipsisPosition="end" :max-lines="2" max-width="9rem" />
  </div>
</template>

<script setup lang="ts">
  import TextEllipsis from '@/components/text-ellipsis'
  const text = ref(
    '测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字'
  )
</script>

<style scoped lang="less"></style>
