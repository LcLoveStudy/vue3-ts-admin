<template>
  <div class="main">
    <div class="flex justify-around">
      <LineChart
        :x-data="['Brazil', 'Indonesia', 'USA', 'China']"
        x-axis-name="人数"
        y-axis-name="国家"
        :value="[
          {
            name: '2011',
            data: [18203, 23489, 29034, 104970],
            color: 'red'
          },
          {
            name: '2012',
            data: [18224, 23600, 30000, 124970],
            color: 'skyblue'
          }
        ]"
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
