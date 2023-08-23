<template>
  <div class="main">
    <div class="flex justify-around items-center">
      <PieChart
        :data="[
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { PieChart } from '@/components/echarts'
</script>

<style scoped lang="less">
  .main {
    padding: 0 0 0 100px;
  }
</style>
