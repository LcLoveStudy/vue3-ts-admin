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
import BaseStyle from '@/views/documents/styleShow/BaseStyle.vue'
import FlexStyle from '@/views/documents/styleShow/FlexStyle.vue'
import GrilStyle from '@/views/documents/styleShow/GrilStyle.vue'
import FontStyle from '@/views/documents/styleShow/FontStyle.vue'
import OverflowStyle from '@/views/documents/styleShow/OverflowStyle.vue'
import PositionStyle from '@/views/documents/styleShow/PositionStyle.vue'
import BackgroundStyle from '@/views/documents/styleShow/BackgroundStyle.vue'
import BorderStyle from '@/views/documents/styleShow/BorderStyle.vue'
</script>

<style scoped lang="less"></style>