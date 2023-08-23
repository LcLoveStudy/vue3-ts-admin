<template>
  <div class="main">
    <div class="flex justify-around">
      <LineChart
        :x-data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
        x-axis-name="星期"
        y-axis-name="次数"
        :value="[120, 200, 150, 80, 70, 110, 130]"
        :smooth="true"
        :area="true"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { LineChart } from '@/components/echarts'
</script>

<style scoped lang="less">
  .main {
    padding: 0 0 0 100px;
  }
</style>
