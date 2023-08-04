<template>
  <div class="flex flex-wrap ml-20">
    <!-- 深拷贝对象 -->
    <el-card class="width-400 height-full">
      <div class="fs-16 fw-600 tomato">
        深拷贝对象(objectCopy)
        <el-icon class="hover-pointer" @click="copyUtils('objectCopy')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">深拷贝对象，不会改变原对象</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <span class="orange">objectCopy</span><span class="blue">({ a:1 , b:1 , c:1 })</span> -> {
        a:1 , b:1 , c:1 }
      </div>
    </el-card>
    <!-- 深度对象冻结，阻止vue劫持对象，提升性能。 -->
    <el-card class="width-400 height-full ml-20">
      <div class="fs-16 fw-600 tomato">
        深度对象冻结(deepFreeze)
        <el-icon class="hover-pointer" @click="copyUtils('deepFreeze')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">
        深度对象冻结，阻止vue劫持对象，提升性能。被冻结的对象和返回的对象都会被冻结，不可以再次修改
      </div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <span class="orange">deepFreeze</span><span class="blue">({ a:1 , b:1 , c:1 })</span> -> {
        a:1 , b:1 , c:1 }
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { getCopy } from '@/utils';
//点击复制图表
const copyUtils = (FunName: string) => {
  getCopy(FunName);
};
</script>

<style scoped lang="less"></style>
