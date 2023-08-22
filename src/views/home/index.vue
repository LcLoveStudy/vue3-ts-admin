<template>
  <div class="mb-20 fs-20 fw-700">home</div>
  <bar-chart
    :x-data="['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']"
    x-axis-name="星期"
    y-axis-name="次数"
    :value="[120, 200, 150, 80, 70, 110, 130]"
    :reverse="false"
  />
</template>

<script setup lang="ts">
  import { getList } from '@/api'
  import BarChart from '@/components/ss-echarts/bar-chart.vue'
  getList({ page: 1 }).then((res) => {
    // console.log(res.info.name)
  })
</script>

<style scoped></style>
