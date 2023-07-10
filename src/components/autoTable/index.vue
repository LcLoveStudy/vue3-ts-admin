<template>
  <el-table ref="multipleTableRef" :border="props.border" stripe :data="props.tableData" :height="props.height"
    @selection-change="handleSelectionChange" style="width: 100%" :element-loading-text="props.loadingText"
    element-loading-background="rgba(122, 122, 122, 0.8)" v-loading="props.loading">
    <!-- 第一列可选 -->
    <el-table-column v-if="props.selection" type="selection" width="55" />
    <!-- 开始循环渲染 -->
    <template v-for="item in columnData" :key="item.props">
      <template v-if="slots[item.prop]">
        <el-table-column :prop="item.prop" :label="item.label" :width="item?.width" :sortable="item?.sortable"
          :filters="item.filters" :filter-method="item?.filterMethod">
          <template #default="scope">
            <slot :name="item.prop" :scope="scope"></slot>
          </template>
        </el-table-column>
      </template>
      <template v-else>
        <el-table-column :prop="item.prop" :label="item.label" :width="item?.width" :sortable="item?.sortable"
          :filters="item.filters" :filter-method="item?.filterMethod" />
      </template>
    </template>
    <!-- 操作栏 -->
    <el-table-column v-if="slots.option" label="操作">
      <template #default="scope">
        <slot name="option" :scope="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { type autoColFace } from '@/type/autotable-col'
import type { ElTable } from 'element-plus';
import { nextTick, ref, useSlots, watch } from 'vue'
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
  //是否全选
  selectAll: {
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
const emits = defineEmits(['selectChange', 'update:selectAll'])
//获取所有插槽
const slots = useSlots()
//表头数据
const columnData = ref<Array<autoColFace>>([])
const createColumnData = () => {
  //通过order对显示数据进行排序
  columnData.value = props.columnData.sort((a: any, b: any) => a?.order - b?.order) as Array<autoColFace>
}
createColumnData()

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref([])
//选中状态改变时
const handleSelectionChange = (val: any) => {
  multipleSelection.value = val
  if (multipleSelection.value.length == props.tableData.length) {
    emits('update:selectAll', true)
  } else if (multipleSelection.value.length != props.tableData.length) {
    emits('update:selectAll', false)
  }
  emits('selectChange', val)
}
//监听是否全选
watch(() => props.selectAll, (newValue) => {
  if (newValue && multipleSelection.value.length != props.tableData.length) {
    multipleTableRef.value!.toggleAllSelection()
  } else if (newValue && multipleSelection.value.length == props.tableData.length) {
    emits('update:selectAll', true)
  } else {
    if (multipleSelection.value.length == props.tableData.length) {
      multipleTableRef.value!.clearSelection()
    }
  }
})
</script>

<style scoped lang="less"></style>