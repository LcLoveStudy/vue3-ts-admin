<template>
  <div class="flex flex-wrap ml-5">
    <!-- 是否为数组(isArray) -->
    <el-card class="w-100 height-full">
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
    <!-- 对数组排序(arrSort) -->
    <el-card class="w-150 height-full ml-5">
      <div class="fs-base font-semibold text-red-700">
        对数组排序(arrSort)
        <el-icon class="cursor-pointer" @click="copyUtils('arrSort')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">
        对数组排序，不改变原数组，三个参数
        <br />
        参数1:目标数组
        <br />
        参数2:不填或者true是从升序；false为降序;
        <br />
        参数3:对象数组中的某个值进行排序;填了此项时，flag必填
        <br />
      </div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div>
          <span class="text-orange-500">arrSort</span>
          <span class="text-sky-600">([0,4,2,3,6])</span>
          -> [0,2,3,4,6]
        </div>
        <div class="mt-2.5">
          <span class="text-orange-500">arrSort</span>
          <span class="text-sky-600">([0,4,2,3,6])</span>
          -> [6,4,3,2,0]
        </div>
        <div class="mt-2.5">
          <span class="text-orange-500">arrSort</span>
          <span class="text-sky-600">
            ([{ time:2 , age:5 },{ time:5 , age:1 },{ time:1 , age:3 }, false , 'age' ])
          </span>
          -> [{ time:2 , age:5 },{ time:1 , age:3},{ time:5 , age:1 }]
        </div>
      </div>
    </el-card>
    <!-- 返回一个被full填充的长度为length的数组(arrFull) -->
    <el-card class="w-100 height-full mt-4">
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
    <!-- 对数组排序(arrSort) -->
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
