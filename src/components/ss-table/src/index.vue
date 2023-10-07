<template>
  <el-table
    ref="multipleTableRef"
    stripe
    :data="props.tableData"
    :height="props.height"
    @selection-change="handleSelectionChange"
    style="width: 100%"
    :element-loading-text="props.loadingText"
    element-loading-background="rgba(122, 122, 122, 0.8)"
    v-loading="props.loading"
  >
    <!-- 第一列可选 -->
    <el-table-column v-if="props.selection" type="selection" width="55" />
    <template v-for="item in colData" :key="item.props">
      <!-- 有插槽的列 -->
      <template v-if="slots[item.prop]">
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item?.width"
          :sortable="item?.sortable"
          :filters="item.filters"
          :filter-method="item?.filterMethod"
        >
          <template #default="scope">
            <slot :name="item.prop" :scope="scope"></slot>
          </template>
        </el-table-column>
      </template>
      <!-- 普通列 -->
      <template v-else>
        <el-table-column
          :prop="item.prop"
          :label="item.label"
          :width="item?.width"
          :sortable="item?.sortable"
          :filters="item.filters"
          :filter-method="item?.filterMethod"
        />
      </template>
    </template>
  </el-table>
  <div class="width-full flex justify-end mt-20">
    <el-pagination
      v-model:current-page="pageinfo.current"
      v-model:page-size="pageinfo.size"
      background
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageinfo.total"
      @size-change="currentChange"
      @current-change="currentChange"
    />
  </div>
</template>

<script setup lang="ts">
  import { type TableColType, type PageType } from './auto-table'
  import { objectCopy } from '@/utils'
  import type { ElTable } from 'element-plus'
  defineOptions({
    name: 'SsTable'
  })

  const props = defineProps({
    // 表格数据
    tableData: {
      type: Array,
      required: true
    },
    // 表头数据
    columnData: {
      type: Array as PropType<TableColType[]>,
      required: true
    },
    // 是否每行可选择
    selection: {
      type: Boolean,
      default: false
    },
    // 是否全选
    selectAll: {
      type: Boolean,
      default: false
    },
    // 是否需要分页
    needPage: {
      type: Boolean,
      default: true
    },
    // 分页
    page: {
      type: Object as PropType<PageType>,
      default: () => {
        return {
          current: 1,
          size: 10,
          total: 100
        }
      }
    },
    // 表格高度
    height: {
      type: String,
      default: '40vh'
    },
    // 是否加载特效
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
    (evt: 'update:page', value: object): void
    (evt: 'currentChange'): void
  }>()
  // 页码信息
  const pageinfo = ref(props.page)
  // 当前页码发生改变
  const currentChange = () => {
    emits('update:page', pageinfo.value)
    emits('currentChange')
  }
  // 获取所有插槽
  const slots = useSlots()
  /** 表头数据 */
  const colData = ref<Array<TableColType>>([])
  const createColumnData = () => {
    // 通过order对显示数据进行排序
    colData.value = props.columnData
      .slice()
      .sort((a: any, b: any) => a?.order - b?.order) as Array<TableColType>
  }
  createColumnData()

  const multipleTableRef = ref<InstanceType<typeof ElTable>>()
  const multipleSelection = ref([])
  /** 选中状态改变时 */
  const handleSelectionChange = (val: any) => {
    multipleSelection.value = val
    if (multipleSelection.value.length === props.tableData.length) {
      emits('update:selectAll', true)
    } else if (multipleSelection.value.length !== props.tableData.length) {
      emits('update:selectAll', false)
    }
    emits('selectChange', val)
  }
  /** 监听是否全选 */
  watch(
    () => props.selectAll,
    (newValue) => {
      if (newValue && multipleSelection.value.length !== props.tableData.length) {
        multipleTableRef.value!.toggleAllSelection()
      } else if (newValue && multipleSelection.value.length === props.tableData.length) {
        emits('update:selectAll', true)
      } else {
        if (multipleSelection.value.length === props.tableData.length) {
          multipleTableRef.value!.clearSelection()
        }
      }
    }
  )
</script>
