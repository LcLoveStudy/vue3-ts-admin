<template>
  <el-checkbox v-model="selectAll" label="全选" size="large" />
  <AutoTable :tableData="tableData" :columnData="columnData" :selection="true" v-model:selectAll="selectAll"
    @selectChange="change" @tableEdit="editHandle">
    <template #age="{ scope }">
      <span class="blue"> {{ scope.row.age }}</span>
    </template>
    <template #option="{ scope }">
      <el-text type="primary">做点什么</el-text>
    </template>
  </AutoTable>
</template>

<script setup lang="ts">
import AutoTable from '@/components/autoTable/index.vue'
import { ref } from 'vue'
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
      const property = column['property']
      return row[property] == value
    }
  },
  {
    prop: 'age',
    label: '年龄',
    order: 2,
    width: '',
    sortable: true
  }
])

interface tableType {
  id: number
  name: string
  age: number
  sex: string
}
const tableData = ref<Array<tableType>>([
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
  }
])

const selectAll = ref(false)
const change = (value: Array<tableType>) => {
  console.log(value)
}

const editHandle = (newValue: any, propName: string) => {
  tableData.value.map((item: any) => {
    if (item.id == newValue.id) {
      item[propName] = newValue[propName]
    }
  })
}
</script>

<style scoped></style>