<template>
  <div class="grid grid-cols-4 gap-4">
    <!-- 是否为数组(isArray) -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        是否为数组(isArray)
        <el-icon class="cursor-pointer" @click="copyUtils('isArray')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">判断是否为数组，目标变量是否为数组</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div>
          <span class="text-orange-500">isArray</span>
          <span class="text-sky-600">('测试字符串')</span>
          -> false
        </div>
        <div class="mt-2.5">
          <span class="text-orange-500">isArray</span>
          <span class="text-sky-600">([ 1 , 2 , 3 ])</span>
          -> true
        </div>
      </div>
    </el-card>
    <!-- 返回一个被full填充的长度为length的数组(arrFull) -->
    <el-card>
      <div class="fs-base font-semibold text-red-700">
        返回一个被full填充的长度为length的数组(arrFull)
        <el-icon class="cursor-pointer" @click="copyUtils('arrFull')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">
        参数1:返回数组的长度
        <br />
        参数2:用于填充的参数
        <br />
      </div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div>
          <span class="text-orange-500">arrFull</span>
          <span class="text-sky-600">(2,1)</span>
          -> [1,1]
        </div>
        <div class="mt-2.5">
          <span class="text-orange-500">arrFull</span>
          <span class="text-sky-600">(-1,'111')</span>
          -> []
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { copyTxt } from '@/utils'
  import { ElMessage } from 'element-plus'
  // 点击复制图表
  const copyUtils = (FunName: string) => {
    copyTxt(FunName)
  }
</script>

<style scoped lang="less"></style>
