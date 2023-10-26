<template>
  <div class="flex items-center">
    <SliderVerify ref="slider" v-model:status="status" @on-success="successHandler" />
    <el-button class="ml-[1rem]" @click="resetVerify">重置</el-button>
  </div>
</template>

<script setup lang="ts">
  import SliderVerify from '@/components/slider-verify'
  import { ElMessage } from 'element-plus'
  const slider = ref()
  const status = ref(false)
  const successHandler = () => {
    ElMessage.success('验证成功')
  }
  const resetVerify = () => {
    slider.value.reset()
  }
</script>
