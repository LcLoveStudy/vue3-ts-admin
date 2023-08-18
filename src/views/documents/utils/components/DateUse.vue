<template>
  <div class="flex flex-wrap ml-20">
    <!-- 格式化时间对象 -->
    <el-card class="width-400 height-full">
      <div class="fs-16 fw-600 tomato">
        格式化时间对象(dateFormat)
        <el-icon class="hover-pointer" @click="copyUtils('dateFormat')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">对标准时间对象进行格式化</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <span class="orange">dateFormat</span>
        <span class="blue">(new Date(), 'YYYY年MM月DD h:m:s')</span>
        -> 2001年11月12日 11:12:11
      </div>
    </el-card>
    <!-- 将秒数转换时分秒。 -->
    <el-card class="width-400 height-full ml-20">
      <div class="fs-16 fw-600 tomato">
        将秒数转换时分秒(hourFormat)
        <el-icon class="hover-pointer" @click="copyUtils('hourFormat')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">将秒数转换为时分秒</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <span class="orange">hourFormat</span>
        <span class="blue">(80)</span>
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
