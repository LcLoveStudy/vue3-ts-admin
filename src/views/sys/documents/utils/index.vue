<template>
  <el-tabs>
    <el-tab-pane label="通用">
      <base-use />
    </el-tab-pane>
    <el-tab-pane label="object">
      <object-use />
    </el-tab-pane>
    <el-tab-pane label="array">
      <array-use />
    </el-tab-pane>
    <el-tab-pane label="string">
      <string-use />
    </el-tab-pane>
    <el-tab-pane label="date">
      <date-use />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
  import BaseUse from './components/base-use.vue'
  import ObjectUse from './components/object-use.vue'
  import ArrayUse from './components/array-use.vue'
  import StringUse from './components/string-use.vue'
  import DateUse from './components/date-use.vue'
</script>
