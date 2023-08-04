<template>
  <div class="flex flex-wrap ml-20">
    <!-- 复制内容到剪贴板(getCopy) -->
    <el-card class="width-400 height-full">
      <div class="fs-16 fw-600 tomato">
        复制内容到剪贴板(getCopy)
        <el-icon class="hover-pointer" @click="copyUtils('getCopy')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">getCopy</span>
          <span class="blue">('测试字符串')</span>
          -> 即可粘贴
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
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div>
          <span class="orange">getType</span>
          <span class="blue">('测试字符串')</span>
          -> string
        </div>
        <div>
          <span class="orange">getType</span>
          <span class="blue">(123)</span>
          -> number
        </div>
        <div>
          <span class="orange">getType</span>
          <span class="blue">([1,2,5])</span>
          -> array
        </div>
      </div>
    </el-card>
    <!-- 获取变量的类型(getColor) -->
    <el-card class="width-400 height-full ml-20 mb-20">
      <div class="fs-16 fw-600 tomato">
        随机获取一个16进制的颜色(getColor)
        <el-icon class="hover-pointer" @click="copyUtils('getColor')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">获取16进制的颜色</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <el-button type="primary" size="small" @click="getRandomColor">点我获取随机颜色</el-button>
        <div class="mt-5">
          <span class="orange">getColor</span>
          <span class="blue">()</span>
          ->
          <i :style="{ color: randomColor }">{{ randomColor }}</i>
        </div>
      </div>
    </el-card>
    <!-- 存储localStorage(setItem) -->
    <el-card class="width-400 height-full">
      <div class="fs-16 fw-600 tomato">
        存储localStorage(setItem)
        <el-icon class="hover-pointer" @click="copyUtils('setItem')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">将数据存储到localstorage中</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div class="mt-5">
          <span class="orange">setItem</span>
          <span class="blue">('userid','12345')</span>
          -> 存储成功
        </div>
      </div>
    </el-card>
    <!-- 获取存储到localStorage的数据(getItem) -->
    <el-card class="width-400 height-full ml-20">
      <div class="fs-16 fw-600 tomato">
        获取存储到localStorage的数据(getItem)
        <el-icon class="hover-pointer" @click="copyUtils('getItem')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">获取存储到localStorage的数据</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div class="mt-5">
          <span class="orange">getItem</span>
          <span class="blue">('userid')</span>
          -> 12345
        </div>
      </div>
    </el-card>
    <!-- 删除存储到localStorage的数据(removeItem) -->
    <el-card class="width-400 height-full ml-20">
      <div class="fs-16 fw-600 tomato">
        删除存储到localStorage的数据(removeItem)
        <el-icon class="hover-pointer" @click="copyUtils('removeItem')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-10">删除存储到localStorage的数据,不传参数则删除所有</div>
      <div class="mt-10 pl-5 pt-5 pr-5 pb-5">
        <div class="mt-5">
          <span class="orange">removeItem</span>
          <span class="blue">('userid')</span>
          -> 删除userid
          <span class="orange">removeItem</span>
          <span class="blue">()</span>
          -> 删除所有存储的内容
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { getCopy, getColor } from '@/utils'
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
