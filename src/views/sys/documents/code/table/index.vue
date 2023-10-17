<template>
  <el-checkbox v-model="selectAll" label="全选" size="large" />
  <ss-table
    :tableData="tableData"
    :columnData="columnData"
    :selection="true"
    v-model:selectAll="selectAll"
    @selectChange="change"
    height="30vh"
    v-model:page="page"
    @currentChange="currentChange"
  >
    <template #age="{ scope }">
      <span class="text-sky-600">{{ scope.row.age }}</span>
    </template>
    <template #option="{}">
      <el-text type="primary">做点什么</el-text>
    </template>
  </ss-table>
  <!-- 代码 -->
  <TableCode />
  <h2 class="mb-6">表格参数说明</h2>
  <howToUseTable :howToUse="howToUse" />
  <h2 class="mt-6 mb-6">每列参数说明</h2>
  <howToUseTable :howToUse="colPropUse" />
</template>

<script setup lang="ts">
  import SsTable from '@/components/ss-table'
  import howToUseTable from '../../components/how-to-use-table.vue'
  import TableCode from './code.vue'
  /** 列数据配置 */
  const columnData = ref([
    {
      prop: 'name',
      label: '姓名',
      width: '100'
    },
    {
      prop: 'sex',
      label: '性别',
      filters: [
        { text: '男', value: '男' },
        { text: '女', value: '女' }
      ],
      filterMethod: (value: string, row: any, column: any) => {
        const property = column.property
        return row[property] === value
      }
    },
    {
      prop: 'age',
      label: '年龄',
      sortable: true
    },
    {
      prop: 'option',
      label: '操作'
    }
  ])

  /** 表格数据的数据结构 */
  interface TableType {
    id: number
    name: string
    age: number
    sex: string
  }
  /** 表单数据 */
  const tableData = ref<Array<TableType>>([
    {
      id: 1,
      name: 'lc',
      age: 34,
      sex: '男'
    },
    {
      id: 2,
      name: 'ww',
      age: 41,
      sex: '女'
    },
    {
      id: 3,
      name: 'dd',
      age: 18,
      sex: '男'
    }
  ])

  /** 是否全选 */
  const selectAll = ref(false)
  /** 改变表单的选中状态 */
  const change = (value: Array<TableType>) => {
    console.log(value)
  }

  const page = ref({
    current: 1,
    total: 200,
    size: 20
  })
  const currentChange = () => {
    console.log(page.value)
  }

  const howToUse = ref([
    {
      propName: 'tableData',
      mean: '要显示的数据数组',
      type: 'array',
      default: '-'
    },
    {
      propName: 'columnData',
      mean: '表头参数，如下表',
      type: 'array',
      default: '-'
    },
    {
      propName: 'selection',
      mean: '是否表头可选',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'v-model:selectAll',
      mean: '全选状态',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'height',
      mean: '表格高度，超过高度显示滚动条',
      type: 'string',
      default: '40vh'
    },
    {
      propName: 'loading',
      mean: 'loading状态',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'loadingText',
      mean: 'loading时的文字提示',
      type: 'string',
      default: '正在加载中.....'
    },
    {
      propName: '@selectChange',
      mean: '选中状态改变的函数',
      type: 'Function',
      default: '参数：被选中的数据数组'
    }
  ])

  const colPropUse = ref([
    {
      propName: 'prop',
      mean: '字段标识，对应tableData要显示的字段',
      type: 'string',
      default: '-'
    },
    {
      propName: 'label',
      mean: '在表头显示的字段中文名',
      type: 'string',
      default: '-'
    },
    {
      propName: 'sortable',
      mean: '该列数据是否需要排序',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'width',
      mean: '该列的宽度',
      type: 'string|number',
      default: '自适应'
    },
    {
      propName: 'filters',
      mean: '该列的过滤条件：数组【{ text:"描述",value:"值" }】',
      type: 'array',
      default: '-'
    },
    {
      propName: 'filterMethod',
      mean: '过滤方法的回调',
      type: 'function',
      default: '-'
    }
  ])
</script>
