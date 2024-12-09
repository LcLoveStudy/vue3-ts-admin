<template>
  <el-table :data="howToUse" style="width: 100%" stripe>
    <el-table-column prop="propName" label="参数名" />
    <el-table-column prop="mean" label="说明" width="400" />
    <el-table-column prop="type" label="类型" />
    <el-table-column prop="default" label="默认值" />
  </el-table>
</template>

<script setup lang="ts">
  defineProps({
    howToUse: {
      type: Array,
      default: () => []
    }
  })
</script>
