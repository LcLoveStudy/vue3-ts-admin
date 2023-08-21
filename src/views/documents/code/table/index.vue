<template>
  <el-checkbox v-model="selectAll" label="全选" size="large" />
  <auto-table
    :tableData="tableData"
    :columnData="columnData"
    :selection="true"
    v-model:selectAll="selectAll"
    @selectChange="change"
    @tableEdit="editHandle"
    height="30vh"
    v-model:page="page"
    @currentChange="currentChange"
  >
    <template #age="{ scope }">
      <span class="blue">{{ scope.row.age }}</span>
    </template>
    <template #option="{}">
      <el-text type="primary">做点什么</el-text>
    </template>
  </auto-table>
  <!-- 代码 -->
  <TableCode />
  <h2 class="mb-20">表格参数说明</h2>
  <howToUseTable :howToUse="howToUse" />
  <h2 class="mt-25 mb-25">每列参数说明</h2>
  <howToUseTable :howToUse="colPropUse" />
</template>

<script setup lang="ts">
  import AutoTable from '@/components/auto-table'
  import howToUseTable from '../components/how-to-use-table.vue'
  import TableCode from './code.vue'
  /** 列数据配置 */
  const columnData = ref([
    {
      prop: 'name',
      label: '姓名',
      order: 1,
      editable: true,
      width: '100'
    },
    {
      prop: 'sex',
      label: '性别',
      order: 3,
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
      order: 2,
      width: '',
      sortable: true
    },
    {
      prop: 'option',
      label: '操作',
      order: 4,
      width: '',
      sortable: false
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

  /**
   * 编辑了表单后的回调函数
   * @param newValue 新值
   * @param propName 被修改的参数
   */
  const editHandle = (newValue: any, propName: string) => {
    tableData.value.forEach((item: any) => {
      if (item.id === newValue.id) {
        item[propName] = newValue[propName]
      }
    })
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
    },
    {
      propName: '@tableEdit',
      mean: '编辑后的回调函数',
      type: 'Function',
      default: '参数1：被修改的行数据;参数2：被修改的字段'
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
      propName: 'order',
      mean: '该列在表格中是第几列',
      type: 'number',
      default: '-'
    },
    {
      propName: 'editable',
      mean: '该列数据是否可以编辑',
      type: 'boolean',
      default: 'false'
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
