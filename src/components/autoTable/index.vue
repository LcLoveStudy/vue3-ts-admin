<template>
  <el-table ref="singleTableRef" :data="props.tableData" :stripe="props.stripe" style="width: 100%">
    <!-- 第一列可选 -->
    <el-table-column v-if="props.selection" type="selection" width="55" />
    <!-- 开始循环渲染 -->
    <template v-for="item in columnData" :key="item.props">
      <el-table-column :props="item.props" :label="item.label" :width="item?.width" :sortable="item?.sortable" />
    </template>
  </el-table>
</template>

<script setup lang="ts">
import {type autoColFace} from '@/type/autotable-col'
const props = defineProps({
  //表格数据
  tableData: {
    type: Array,
    required: true
  },
  //表头数据
  columnData:{
    type: Array,
    required: true
  },
  //是否每行可选择
  selection:{
    type: Boolean,
    default:false
  },
  //是否斑马纹
  stripe:{
    type: Boolean,
    default:true
  }
})

const columnData:Array<autoColFace> = props.columnData as Array<autoColFace> 
</script>

<style scoped lang="less"></style>