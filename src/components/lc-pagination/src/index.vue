<template>
  <el-pagination
    v-model:current-page="page.current"
    v-model:page-size="page.size"
    background
    :layout="props.layout"
    :total="page.total"
    @size-change="currentChange"
    @current-change="currentChange"
  />
</template>

<script setup lang="ts">
  defineOptions({
    name: 'LcPagination'
  })

  const page = defineModel({
    type: Object as PropType<{
      current: number
      size: number
      total: number
    }>,
    required: true
  })

  const props = defineProps({
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    }
  })
  const emits = defineEmits(['change'])
  /**
   * 当前页码或者页数大小改变时的回调
   * 调用自定义函数currentChange
   */
  const currentChange = () => {
    emits('change')
  }
</script>
