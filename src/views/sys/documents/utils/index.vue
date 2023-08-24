<template>
  <el-card class="mb-20 fs-25">
    <span class="tomato">vueuse:一款非常好用官方工具库</span>
    <br />
    <div class="flex items-center mt-10 fs-16">
      更多配置查看
      <el-link type="primary" @click="goVueUse"><span class="fs-16">官网</span></el-link>
    </div>
  </el-card>
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
  const goVueUse = () => {
    window.open('https://vueuse.org/')
  }
</script>

<style scoped lang="less"></style>
