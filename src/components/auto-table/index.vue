<template>
  <el-table ref="multipleTableRef" stripe :data="props.tableData" :height="props.height"
    @selection-change="handleSelectionChange" style="width: 100%" :element-loading-text="props.loadingText"
    element-loading-background="rgba(122, 122, 122, 0.8)" v-loading="props.loading">
    <!-- 第一列可选 -->
    <el-table-column v-if="props.selection" type="selection" width="55" />
    <template v-for="item in columnData" :key="item.props">
      <!-- 可编辑的列 -->
      <template v-if="item.editable">
        <el-table-column :prop="item.prop" :label="item.label" :width="item?.width" :sortable="item?.sortable"
          :filters="item.filters" :filter-method="item?.filterMethod">
          <template #default="scope">
            <el-input size="small" v-if="scope.row.isEdit" v-model="scope.row.copyValue" v-focus="true"
              @blur="editInputBlur(scope, item.prop)"></el-input>
            <span @dblclick="scope.row.isEdit = true, scope.row.copyValue = scope.row[item.prop]" v-else>{{
              scope.row[item.prop] }}</span>
          </template>
        </el-table-column>
      </template>
      <!-- 有插槽的列 -->
      <template v-else-if="slots[item.prop]">
        <el-table-column :prop="item.prop" :label="item.label" :width="item?.width" :sortable="item?.sortable"
          :filters="item.filters" :filter-method="item?.filterMethod">
          <template #default="scope">
            <slot :name="item.prop" :scope="scope"></slot>
          </template>
        </el-table-column>
      </template>
      <!-- 普通列 -->
      <template v-else>
        <el-table-column :prop="item.prop" :label="item.label" :width="item?.width" :sortable="item?.sortable"
          :filters="item.filters" :filter-method="item?.filterMethod" />
      </template>
    </template>
  </el-table>
</template>

<script setup lang="ts">
import { type columnType } from '@/type/auto-table'
import { objectCopy } from '@/utils'
import type { ElTable } from 'element-plus';
import { ref, useSlots, watch, type PropType } from 'vue'
const props = defineProps({
  //表格数据
  tableData: {
    type: Array,
    required: true
  },
  //表头数据
  columnData: {
    type: Array as PropType<columnType[]>,
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
  }
})
const emits = defineEmits<{
  (evt: 'update:selectAll', value: boolean): void
  (evt: 'selectChange', value: any): void
  (evt: 'tableEdit', newValue: any, propName: string): void
}>()
//获取所有插槽
const slots = useSlots()
/** 表头数据 */
const columnData = ref<Array<columnType>>([])
const createColumnData = () => {
  //通过order对显示数据进行排序
  columnData.value = props.columnData.sort((a: any, b: any) => a?.order - b?.order) as Array<columnType>
}
createColumnData()

const multipleTableRef = ref<InstanceType<typeof ElTable>>()
const multipleSelection = ref([])
/** 选中状态改变时 */
const handleSelectionChange = (val: any) => {
  multipleSelection.value = val
  if (multipleSelection.value.length == props.tableData.length) {
    emits('update:selectAll', true)
  } else if (multipleSelection.value.length != props.tableData.length) {
    emits('update:selectAll', false)
  }
  emits('selectChange', val)
}
/** 监听是否全选 */
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

/** 正在编辑的输入框失去焦点 */
const editInputBlur = (scope: any, propName: string) => {
  scope.row.isEdit = false
  //编辑后的结果
  const editResult = scope.row.copyValue
  delete scope.row.copyValue
  delete scope.row.isEdit
  //新结果传给父组件
  const newValue: any = objectCopy(scope.row)
  newValue[propName] = editResult
  emits('tableEdit', newValue, propName)
}
</script>

<style scoped lang="less"></style>