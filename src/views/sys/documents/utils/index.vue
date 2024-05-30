<template>
  <el-tabs>
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
    <el-tab-pane label="date">
      <DateUse />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
  import BaseUse from './components/BaseUse.vue'
  import objectUse from './components/ObjectUse.vue'
  import arrayUse from './components/ArrayUse.vue'
  import stringUse from './components/StringUse.vue'
  import DateUse from './components/DateUse.vue'
</script>
