<template>
  <el-radio-group v-if="props.type == 'radio'" v-model="value" @change="radioChange">
    <el-radio
      v-for="item in radioOtpions"
      :key="item.value"
      :disabled="item.disabled"
      :label="item.value"
    >
      {{ item.label }}
    </el-radio>
  </el-radio-group>
  <el-checkbox-group v-else-if="props.type == 'checkbox'" v-model="value" @change="radioChange">
    <el-checkbox
      v-for="item in radioOtpions"
      :disabled="item.disabled"
      :label="item.value"
      :key="item.value"
    >
      {{ item.label }}
    </el-checkbox>
  </el-checkbox-group>
</template>

<script setup lang="ts">
  const props = defineProps({
    value: {
      type: Array || String,
      required: true
    },
    option: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      default: 'radio'
    }
  })
  const emits = defineEmits(['update:value', 'change'])

  // 初始化默认值
  const value: any = ref(props.value)
  // 单选框改变时
  const radioChange = () => {
    emits('update:value', value.value)
    emits('change', value.value)
  }

  // 规定必须包含value和label
  interface RadioOptionType {
    value: string | number
    label: string
    disabled?: boolean
  }
  const radioOtpions = props.option as Array<RadioOptionType>
</script>
