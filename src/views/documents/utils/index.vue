<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="通用">
      <BaseUse />
    </el-tab-pane>
    <el-tab-pane label="object">object</el-tab-pane>
    <el-tab-pane label="array">array</el-tab-pane>
    <el-tab-pane label="string">string</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import BaseUse from './baseUse.vue'
</script>

<style scoped lang="less"></style>