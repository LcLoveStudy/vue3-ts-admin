<template>
  <el-pagination
    v-model:current-page="current"
    v-model:page-size="size"
    background
    :layout="props.layout"
    :total="props.total"
    @size-change="sizeChangeHandler"
    @current-change="emits('change')"
  />
</template>

<script setup lang="ts">
  defineOptions({
    name: 'LcPagination'
  })
  const size = defineModel('size', {
    type: Number,
    default: 10
  })
  const current = defineModel('current', {
    type: Number,
    default: 1
  })
  const props = defineProps({
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    total: {
      type: Number,
      default: 0
    }
  })
  const emits = defineEmits(['change'])
  const sizeChangeHandler = () => {
    current.value = 1
    emits('change')
  }
</script>
