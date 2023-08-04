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
    <!-- 截取字符串(stringSplit) -->
    <el-card class="width-400 height-full ml-20">
      <div class="fs-16 fw-600 tomato">
        截取字符串(stringSplit)
        <el-icon class="hover-pointer" @click="copyUtils('stringSplit')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">
        共三个参数
        <br />
        参数1:目标字符；
        <br />
        参数2:以什么为分割；
        <br />
        参数3:分割后的目标下标
      </div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">stringSplit</span>
          <span class="blue">('2023-6-13','-','1')</span>
          -> 6
        </div>
        <div class="mt-10">
          <span class="orange">stringSplit</span>
          <span class="blue">('3.1415926','.','0')</span>
          -> 3
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { getCopy } from '@/utils'
  //点击复制图表
  const copyUtils = (FunName: string) => {
    getCopy(FunName)
  }
</script>

<style scoped lang="less"></style>
