<template>
  <div class="grid grid-cols-4 gap-4">
    <!-- 将秒数转换时分秒。 -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        将秒数转换时分秒(hourFormat)
        <el-icon class="cursor-pointer" @click="copyUtils('hourFormat')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">将秒数转换为时分秒</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <span class="text-orange-500">hourFormat</span>
        <span class="text-sky-600">(80)</span>
        -> 00:01:20
      </div>
    </el-card>
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
    <!-- 计算两天相差多久 -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        计算两天相差多久(dayDif)
        <el-icon class="cursor-pointer" @click="copyUtils('dayDif')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">第一个日期和第二个日期的相差天数</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <span class="text-orange-500">dayDif</span>
        <span class="text-sky-600">(new Date('2023-2-12'), new Date('2023-2-10'))</span>
        -> 2
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
