<template>
  <div class="grid grid-cols-4 gap-4 ml-5">
    <!-- 复制内容到剪贴板(getCopy) -->
    <el-card>
      <div class="font-semibold text-red-700">
        复制内容到剪贴板(copyTxt)
        <el-icon class="cursor-pointer" @click="copyUtils('copyTxt')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div>
          <span class="text-orange-500">copyTxt</span>
          <span class="text-sky-600">('测试字符串')</span>
          -> 即可粘贴
        </div>
      </div>
    </el-card>
    <!-- 获取变量的类型(getType) -->
    <el-card>
      <div class="font-semibold text-red-700">
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
    <!-- 获取变量的类型(getRandomColor) -->
    <el-card>
      <div class="font-semibold text-red-700">
        随机获取一个16进制的颜色(getRandomColor)
        <el-icon class="cursor-pointer" @click="copyUtils('getRandomColor')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">获取16进制的颜色</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <el-button type="primary" size="small" @click="getRandomColorHandler">
          点我获取随机颜色
        </el-button>
        <div class="mt-5">
          <span class="text-orange-500">getRandomColor</span>
          <span class="text-sky-600">()</span>
          ->
          <i :style="{ color: randomColor }">{{ randomColor }}</i>
        </div>
      </div>
    </el-card>
    <!-- 注册键盘事件(useKeyboardEvt) -->
    <el-card>
      <div class="font-semibold text-red-700">
        键盘事件hook(useKeyboardEvt)
        <el-icon class="cursor-pointer" @click="copyUtils('useKeyboardEvt')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">键盘事件hook,onMounted注册,onBeforeUnmount卸载</div>
      <div class="mt-2.5">keyCode:number 按键code</div>
      <div class="mt-2.5">callBack:Function 回调函数</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div class="mt-1">
          <span class="text-orange-500">useKeyboardEvt</span>
          <span class="text-sky-600">(13,() => console.log('回车了'))</span>
        </div>
      </div>
    </el-card>
    <!-- 使用鼠标事件(useMouseEvt) -->
    <el-card>
      <div class="font-semibold text-red-700">
        使用鼠标事件(useMouseEvt)
        <el-icon class="cursor-pointer" @click="copyUtils('useMouseEvt')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">使用鼠标事件,onMounted注册,onBeforeUnmount卸载</div>
      <div class="mt-2.5">type:string 鼠标事件类型</div>
      <div class="mt-2.5">callBack:Function 回调函数</div>
      <div class="mt-2.5">target?:HTMLElement|Document 目标元素,不填默认为document</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div class="mt-1">
          <span class="text-orange-500">useMouseEvt</span>
          <span class="text-sky-600">('click',() => console.log('双击了页面'))</span>
        </div>
      </div>
    </el-card>
    <!-- 防抖函数(debounce) -->
    <el-card>
      <div class="font-semibold text-red-700">
        防抖函数(debounce)
        <el-icon class="cursor-pointer" @click="copyUtils('debounce')">
          <DocumentCopy />
        </el-icon>
      </div>
      <div class="mt-2.5">防抖函数,在相应的时间后会执行一次,如果再次触发会重新计时</div>
      <div class="mt-2.5">cb:Function 回调函数</div>
      <div class="mt-2.5">delay:number 延迟的时间</div>
      <div class="mt-2.5">immediate?:boolean 是否立刻执行</div>
      <div class="mt-2.5 pl-1 pt-1 pr-1 pb-1">
        <div class="mt-1">
          <span class="text-sky-600">
            @input=
            <span class="text-orange-500">debounce</span>
            (() => { console.log(input.value) }, 1000)
          </span>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
  import { copyTxt, getRandomColor } from '@/utils'
  import { useKeyboardEvt, useMouseEvt } from '@/hooks'
  // 点击复制图表
  const copyUtils = (FunName: string) => {
    copyTxt(FunName)
  }
  useKeyboardEvt(13, () => console.log('回车了'))
  useMouseEvt('dblclick', () => console.log('双击了页面'))
  // 获取随机颜色
  const randomColor = ref(getRandomColor())
  const getRandomColorHandler = () => {
    randomColor.value = getRandomColor()
  }
</script>
