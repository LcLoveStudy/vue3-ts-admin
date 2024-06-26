<template>
  <div class="grid grid-cols-4 gap-4">
    <!-- 获取某个日期位于当年的第几天 -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        获取某个日期位于当年的第几天(dayOfYear)
        <el-icon class="cursor-pointer" @click="copyUtils('dayOfYear')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">获取某个日期位于当年的第几天</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <span class="text-orange-500">dayOfYear</span>
        <span class="text-sky-600">(new Date('2023-2-1'))</span>
        -> 32
      </div>
    </el-card>
    <!-- 判断参数是否是Date或者是否能被转换为Date类型 -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        判断参数是否是Date或者是否能被转换为Date类型(isDateLike)
        <el-icon class="cursor-pointer" @click="copyUtils('isDateLike')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">判断参数是否是Date或者是否能被转换为Date类型</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <span class="text-orange-500">isDateLike</span>
        <span class="text-sky-600">('2024-1-1')</span>
        -> true
      </div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <span class="text-orange-500">isDateLike</span>
        <span class="text-sky-600">('ssss')</span>
        -> false
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
