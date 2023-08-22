<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="基础柱状图">
      <BarChart />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
  import BarChart from './components/bar-show.vue'
  import highlight from 'highlight.js'
  onMounted(() => {
    highlight.highlightAll()
  })
</script>

<style scoped></style>
