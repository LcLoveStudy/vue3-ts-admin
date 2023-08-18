<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="通用">
      <BaseUse />
    </el-tab-pane>
    <el-tab-pane label="object">
      <objectUse />
    </el-tab-pane>
    <el-tab-pane label="array">
      <arrayUse />
    </el-tab-pane>
    <el-tab-pane label="string">
      <stringUse />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
  import BaseUse from './components/baseUse.vue'
  import objectUse from './components/objectUse.vue'
  import arrayUse from './components/arrayUse.vue'
  import stringUse from './components/stringUse.vue'
</script>

<style scoped lang="less"></style>
