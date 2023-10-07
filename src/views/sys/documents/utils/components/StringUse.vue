<template>
  <div class="flex flex-wrap ml-20">
    <!-- 是否为字符串(isString) -->
    <el-card class="width-400 height-full">
      <div class="fs-16 fw-600 tomato">
        是否为字符串(isString)
        <el-icon class="hover-pointer" @click="copyUtils('isString')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">isString</span>
          <span class="blue">('测试字符串')</span>
          -> true
        </div>
        <div class="mt-10">
          <span class="orange">isString</span>
          <span class="blue">(true)</span>
          -> false
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { useCopy } from '@/utils'
  // 点击复制图表
  const copyUtils = (FunName: string) => {
    useCopy(FunName)
  }
</script>

<style scoped lang="less"></style>
