<template>
  <div class="flex flex-wrap ml-5">
    <!-- 复制内容到剪贴板(getCopy) -->
    <el-card class="w-100">
      <div class="text-base font-semibold text-red-700">
        复制内容到剪贴板(useCopy)
        <el-icon class="cursor-pointer" @click="copyUtils('useCopy')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div>
          <span class="text-orange-500">useCopy</span>
          <span class="text-sky-600">('测试字符串')</span>
          -> 即可粘贴
        </div>
      </div>
    </el-card>
    <!-- 获取变量的类型(getType) -->
    <el-card class="w-100 ml-5">
      <div class="text-base font-semibold text-red-700">
        获取变量的类型(getType)
        <el-icon class="cursor-pointer" @click="copyUtils('getType')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div>
          <span class="text-orange-500">getType</span>
          <span class="text-sky-600">('测试字符串')</span>
          -> string
        </div>
        <div>
          <span class="text-orange-500">getType</span>
          <span class="text-sky-600">(123)</span>
          -> number
        </div>
        <div>
          <span class="text-orange-500">getType</span>
          <span class="text-sky-600">([1,2,5])</span>
          -> array
        </div>
      </div>
    </el-card>
    <!-- 获取变量的类型(getColor) -->
    <el-card class="w-100 ml-5">
      <div class="text-base font-semibold text-red-700">
        随机获取一个16进制的颜色(useColor)
        <el-icon class="cursor-pointer" @click="copyUtils('useColor')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">获取16进制的颜色</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <el-button type="primary" size="small" @click="getRandomColor">点我获取随机颜色</el-button>
        <div class="mt-5">
          <span class="text-orange-500">useColor</span>
          <span class="text-sky-600">()</span>
          ->
          <i :style="{ color: randomColor }">{{ randomColor }}</i>
        </div>
      </div>
    </el-card>
    <!-- 存储localStorage(setItem) -->
    <el-card class="w-100 ml-5">
      <div class="text-base font-semibold text-red-700">
        存储localStorage(setItem)
        <el-icon class="cursor-pointer" @click="copyUtils('setItem')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">将数据存储到localstorage中</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div class="mt-1">
          <span class="text-orange-500">setItem</span>
          <span class="text-sky-600">('userid','12345')</span>
          -> 存储成功
        </div>
      </div>
    </el-card>
    <!-- 获取存储到localStorage的数据(getItem) -->
    <el-card class="w-100 ml-5 mt-5">
      <div class="text-base font-semibold text-red-700">
        获取存储到localStorage的数据(getItem)
        <el-icon class="cursor-pointer" @click="copyUtils('getItem')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">获取存储到localStorage的数据</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div class="mt-5">
          <span class="text-orange-500">getItem</span>
          <span class="text-sky-600">('userid')</span>
          -> 12345
        </div>
      </div>
    </el-card>
    <!-- 删除存储到localStorage的数据(removeItem) -->
    <el-card class="w-100 ml-5 mt-5">
      <div class="text-base font-semibold text-red-700">
        删除存储到localStorage的数据(removeItem)
        <el-icon class="cursor-pointer" @click="copyUtils('removeItem')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">删除存储到localStorage的数据,不传参数则删除所有</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div class="mt-1">
          <span class="text-orange-500">removeItem</span>
          <span class="text-sky-600">('userid')</span>
          -> 删除userid
          <span class="text-orange-500">removeItem</span>
          <span class="text-sky-600">()</span>
          -> 删除所有存储的内容
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { useCopy, useColor } from '@/utils'
  // 点击复制图表
  const copyUtils = (FunName: string) => {
    useCopy(FunName)
  }

  // 获取随机颜色
  const randomColor = ref('')
  const getRandomColor = () => {
    randomColor.value = useColor()
  }
</script>

<style scoped lang="less"></style>
