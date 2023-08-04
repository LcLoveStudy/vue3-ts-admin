<template>
  <div class="flex flex-wrap ml-20">
    <!-- 是否为数组(isArray) -->
    <el-card class="width-400 height-full">
      <div class="fs-16 fw-600 tomato">
        是否为数组(isArray)
        <el-icon class="hover-pointer" @click="copyUtils('isArray')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">判断是否为数组，目标变量是否为数组</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">isArray</span><span class="blue">('测试字符串')</span> -> false
        </div>
        <div class="mt-10">
          <span class="orange">isArray</span><span class="blue">([ 1 , 2 , 3 ]) </span> -> true
        </div>
      </div>
    </el-card>
    <!-- 数组去重(noRepeat) -->
    <el-card class="width-400 height-full ml-20">
      <div class="fs-16 fw-600 tomato">
        数组去重(noRepeat)
        <el-icon class="hover-pointer" @click="copyUtils('noRepeat')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">对简单数据类型数据去重，对象数组无效</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">noRepeat</span><span class="blue">('测试字符串')</span> -> false
        </div>
        <div class="mt-10">
          <span class="orange">noRepeat</span
          ><span class="blue">([1 , 2 , 3 , 2 , 5 , 3 ]) </span> -> [ 1 , 2 , 3 , 5 ]
        </div>
        <div class="mt-10">
          <span class="orange">noRepeat</span
          ><span class="blue">([{ a:1 , b:2 },{ a:1 , b:2 }]) </span> -> 无效
        </div>
      </div>
    </el-card>
    <!-- 对数组排序(arrSort) -->
    <el-card class="width-600 height-full ml-20">
      <div class="fs-16 fw-600 tomato">
        对数组排序(arrSort)
        <el-icon class="hover-pointer" @click="copyUtils('arrSort')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">
        对数组排序，不改变原数组，三个参数<br />
        参数1:目标数组<br />
        参数2:不填或者true是从升序；false为降序;<br />
        参数3:对象数组中的某个值进行排序;填了此项时，flag必填<br />
      </div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">arrSort</span><span class="blue">([0,4,2,3,6])</span> -> [0,2,3,4,6]
        </div>
        <div class="mt-10">
          <span class="orange">arrSort</span><span class="blue">([0,4,2,3,6])</span> -> [6,4,3,2,0]
        </div>
        <div class="mt-10">
          <span class="orange">arrSort</span
          ><span class="blue"
            >([{ time:2 , age:5 },{ time:5 , age:1 },{ time:1 , age:3 }, false , 'age' ])</span
          >
          -> [{ time:2 , age:5 },{ time:1 , age:3},{ time:5 , age:1 }]
        </div>
      </div>
    </el-card>
    <!-- 数组合并(arrMerge) -->
    <el-card class="width-500 height-full">
      <div class="fs-16 fw-600 tomato">
        数组合并(arrMerge)
        <el-icon class="hover-pointer" @click="copyUtils('arrMerge')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">获取两个数组的并集</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">arrMerge</span><span class="blue">([1,2,3,4],[2,5,6,5])</span> ->
          [1,2,3,4,5,6]
        </div>
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
