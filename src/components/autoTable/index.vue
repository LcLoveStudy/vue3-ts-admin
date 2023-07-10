<template>
  <el-table ref="singleTableRef" :border="props.border" stripe :data="props.tableData" :height="props.height"
    style="width: 100%" :element-loading-text="props.loadingText" element-loading-background="rgba(122, 122, 122, 0.8)"
    v-loading="props.loading">
    <!-- 第一列可选 -->
    <el-table-column v-if="props.selection" type="selection" width="55" />
    <!-- 开始循环渲染 -->
    <template v-for="item in columnData" :key="item.props">
      <el-table-column :prop="item.prop" :label="item.label" :width="item?.width" :sortable="item?.sortable"
        :filters="item.filters" :filter-method="item?.filterMethod" />
    </template>
  </el-table>
</template>

<script setup lang="ts">
import { type autoColFace } from '@/type/autotable-col'
const props = defineProps({
  //表格数据
  tableData: {
    type: Array,
    required: true
  },
  //表头数据
  columnData: {
    type: Array,
    required: true
  },
  //是否每行可选择
  selection: {
    type: Boolean,
    default: false
  },
  //表格高度
  height: {
    type: String,
    default: '40vh'
  },
  //是否加载特效
  loading: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: '正在加载中.....'
  },
  //是否需要边框
  border: {
    type: Boolean,
    default: false
  }
})
const columnData: Array<autoColFace> = props.columnData as Array<autoColFace>
</script>

<style scoped lang="less"></style>