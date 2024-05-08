<template>
  <div class="grid grid-cols-4 gap-4 ml-5">
    <!-- 深拷贝对象 -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        深拷贝对象(deepClone)
        <el-icon class="cursor-pointer" @click="copyUtils('deepClone')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">深拷贝对象，不会改变原对象</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <span class="text-orange-500">deepClone</span>
        <span class="text-sky-600">({ a:1 , b:1 , c:1 })</span>
        -> { a:1 , b:1 , c:1 }
      </div>
    </el-card>
    <!-- 判断一个对象是否为空对象 -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        判断一个对象是否为空对象(isEmptyObj)
        <el-icon class="cursor-pointer" @click="copyUtils('isEmptyObj')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">判断一个对象是否为空对象,返回true/false</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <span class="text-orange-500">isEmptyObj</span>
        <span class="text-sky-600">({})</span>
        -> true
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
