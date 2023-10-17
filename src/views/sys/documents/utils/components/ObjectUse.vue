<template>
  <div class="flex flex-wrap ml-5">
    <!-- 深拷贝对象 -->
    <el-card class="w-100 height-full">
      <div class="fs-base font-semibold text-red-700">
        深拷贝对象(objectCopy)
        <el-icon class="cursor-pointer" @click="copyUtils('objectCopy')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">深拷贝对象，不会改变原对象</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <span class="text-orange-500">objectCopy</span>
        <span class="text-sky-600">({ a:1 , b:1 , c:1 })</span>
        -> { a:1 , b:1 , c:1 }
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
