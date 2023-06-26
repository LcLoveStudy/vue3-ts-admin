<template>
  <el-input v-focus="focused"></el-input>
  <el-button type="primary" @click="focused = !focused">点我改变聚焦状态</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const focused = ref(false)
</script>

<style scoped></style>