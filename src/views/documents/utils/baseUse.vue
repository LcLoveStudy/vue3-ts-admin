<template>
  <div class="flex flex-wrap">
    <!-- 复制内容到剪贴板(getCopy) -->
    <el-card class="width-400 height-full">
      <div class="fs-16 fw-600 tomato">
        复制内容到剪贴板(getCopy)
        <el-icon class="hover-pointer" @click="copyUtils('getCopy')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="bgc-lightgray  mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">getCopy</span><span class="blue">('测试字符串')</span> -> 即可粘贴
        </div>
      </div>
    </el-card>
    <!-- 获取变量的类型(getType) -->
    <el-card class="width-400 height-full ml-20">
      <div class="fs-16 fw-600 tomato">
        获取变量的类型(getType)
        <el-icon class="hover-pointer" @click="copyUtils('getType')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="bgc-lightgray  mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">getType</span><span class="blue">('测试字符串')</span> -> string
        </div>
        <div>
          <span class="orange">getType</span><span class="blue">(123)</span> -> number
        </div>
        <div>
          <span class="orange">getType</span><span class="blue">([1,2,5])</span> -> array
        </div>
      </div>
    </el-card>
    <!-- 获取变量的类型(getColor) -->
    <el-card class="width-400 height-full ml-20">
      <div class="fs-16 fw-600 tomato">
        随机获取一个16进制的颜色(getColor)
        <el-icon class="hover-pointer" @click="copyUtils('getColor')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">
        获取16进制的颜色
      </div>
      <div class="bgc-lightgray  mt-10 pl-5 pt-5 pr-5 pb-5">
        <el-button type="primary" size="small" @click="getRandomColor">点我获取随机颜色</el-button>
        <div class="mt-5">
          <span class="orange">getColor</span><span class="blue">()</span> -> <i :style="{ color: randomColor }">{{
            randomColor }}</i>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { getCopy, getColor } from '@/utils';
import { ref } from 'vue'
//点击复制图表
const copyUtils = (FunName: string) => {
  getCopy(FunName)
}

//获取随机颜色
const randomColor = ref('')
const getRandomColor = () => {
  randomColor.value = getColor()
}
</script>

<style scoped lang="less"></style>