<template>
  <auto-select
    v-model:value="selectValue"
    filterable
    :options="options"
    multiple
    width="300px"
    @change="selectChange"
  />
</template>

<script setup lang="ts">
  import AutoSelect from '@/components/auto-select'
  const selectValue = ref(1)
  const options = [
    {
      value: 1,
      label: '你好'
    },
    {
      value: 2,
      label: '你好w'
    },
    {
      value: 3,
      label: '你好w2'
    }
  ]
  const selectChange = () => {
    console.log(selectValue.value)
  }
</script>
