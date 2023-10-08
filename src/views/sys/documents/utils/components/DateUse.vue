<template>
  <div class="flex flex-wrap ml-5">
    <!-- 将秒数转换时分秒。 -->
    <el-card class="w-100 height-full ml-5">
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
