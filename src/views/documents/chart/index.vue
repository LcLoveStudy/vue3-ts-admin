<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="基础柱状图">
      <bar-chart />
    </el-tab-pane>
    <el-tab-pane label="多个柱状图">
      <bars-chart />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
  import BarChart from './components/bar-show.vue'
  import BarsChart from './components/bars-show.vue'
  import highlight from 'highlight.js'
  onMounted(() => {
    highlight.highlightAll()
  })
</script>

<style scoped></style>
