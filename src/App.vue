<template>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import { getList } from '@/api'
const getMylist = () => {
  getList()
}
getMylist()
</script>

<style scoped lang="less"></style>
