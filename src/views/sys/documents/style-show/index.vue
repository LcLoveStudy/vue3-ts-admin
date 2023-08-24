<template>
  <el-tabs tab-position="left">
    <el-tab-pane label="通用">
      <BaseStyle />
    </el-tab-pane>
    <el-tab-pane label="flex">
      <FlexStyle />
    </el-tab-pane>
    <el-tab-pane label="gril">
      <GrilStyle />
    </el-tab-pane>
    <el-tab-pane label="text/font">
      <FontStyle />
    </el-tab-pane>
    <el-tab-pane label="overflow">
      <OverflowStyle />
    </el-tab-pane>
    <el-tab-pane label="position">
      <PositionStyle />
    </el-tab-pane>
    <el-tab-pane label="background">
      <BackgroundStyle />
    </el-tab-pane>
    <el-tab-pane label="border">
      <BorderStyle />
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
  import BaseStyle from './components/BaseStyle.vue'
  import FlexStyle from './components/FlexStyle.vue'
  import GrilStyle from './components/GrilStyle.vue'
  import FontStyle from './components/FontStyle.vue'
  import OverflowStyle from './components/OverflowStyle.vue'
  import PositionStyle from './components/PositionStyle.vue'
  import BackgroundStyle from './components/BackgroundStyle.vue'
  import BorderStyle from './components/BorderStyle.vue'
</script>

<style scoped lang="less"></style>
