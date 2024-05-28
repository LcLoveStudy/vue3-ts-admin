<template>
  <div class="grid grid-cols-4 gap-4 ml-5">
    <!-- 是否为字符串(isString) -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        是否为字符串(isString)
        <el-icon class="cursor-pointer" @click="copyUtils('isString')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div>
          <span class="text-orange-500">isString</span>
          <span class="text-sky-600">('测试字符串')</span>
          -> true
        </div>
        <div class="mt-2.5">
          <span class="text-orange-500">isString</span>
          <span class="text-sky-600">(true)</span>
          -> false
        </div>
      </div>
    </el-card>
    <!-- 获取随机字符串(getRandomString) -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        获取随机字符串(getRandomString)
        <el-icon class="cursor-pointer" @click="copyUtils('getRandomString')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div>
          <span class="text-orange-500">getRandomString</span>
          <span class="text-sky-600">(4)</span>
          -> cFar
        </div>
        <div class="mt-2.5">
          <span class="text-orange-500">getRandomString</span>
          <span class="text-sky-600">(5)</span>
          -> trdaF
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { copyTxt } from '@/utils'
  // 点击复制图表
  const copyUtils = (FunName: string) => {
    copyTxt(FunName)
  }
</script>

<style scoped lang="less"></style>
