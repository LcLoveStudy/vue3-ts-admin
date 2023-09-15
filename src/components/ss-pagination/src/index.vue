<template>
  <el-pagination
    v-model:current-page="current"
    v-model:page-size="size"
    background
    layout="total, sizes, prev, pager, next, jumper"
    :total="props.total"
    @size-change="currentChange"
    @current-change="currentChange"
  />
</template>

<script setup lang="ts">
  defineOptions({
    name: 'SsPagination'
  })
  const props = defineProps({
    current: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 100
    }
  })
  const emits = defineEmits(['currentChange', 'update:current', 'update:size'])

  const current = ref(props.current)
  const size = ref(props.size)
  /**
   * 当前页码或者页数大小改变时的回调
   * 调用自定义函数currentChange
   */
  const currentChange = () => {
    emits('update:size', size.value)
    emits('update:current', current.value)
    emits('currentChange')
  }
  watch(
    () => props.current,
    () => {
      current.value = props.current
    }
  )
  watch(
    () => props.size,
    () => {
      size.value = props.size
    }
  )
</script>
