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
  import BaseStyle from '@/views/documents/style-show/BaseStyle.vue'
  import FlexStyle from '@/views/documents/style-show/FlexStyle.vue'
  import GrilStyle from '@/views/documents/style-show/GrilStyle.vue'
  import FontStyle from '@/views/documents/style-show/FontStyle.vue'
  import OverflowStyle from '@/views/documents/style-show/OverflowStyle.vue'
  import PositionStyle from '@/views/documents/style-show/PositionStyle.vue'
  import BackgroundStyle from '@/views/documents/style-show/BackgroundStyle.vue'
  import BorderStyle from '@/views/documents/style-show/BorderStyle.vue'
</script>

<style scoped lang="less"></style>
