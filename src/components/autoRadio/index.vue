<template>
  <el-radio-group v-model="value" @change="radioChange">
    <el-radio v-for="item in radioOtpions" :key="item.value" :disabled="item.disabled" :label="item.value">
      {{ item.label }}
    </el-radio>
  </el-radio-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  value: {
    required: true
  },
  option: {
    type: Array,
    required: true
  }
})
const emits = defineEmits(['update:value', 'change'])

//初始化默认值
const value: any = ref(props.value)
// 单选框改变时
const radioChange = () => {
  emits('update:value', value.value)
  emits('change', value.value)
}

//规定必须包含value和label
interface optionType {
  value: string | number
  label: string
  disabled?: boolean
}
let radioOtpions = props.option as Array<optionType>
</script>

<style scoped></style>