<template>
  <el-checkbox v-model="selectAll" label="全选" />
  <AutoTable :tableData="tableData" :columnData="columnData" :selection="true" v-model:selectAll="selectAll"
    @selectChange="chage">
    <template #age="{ scope }">
      <span class="blue"> {{ scope.row.age }}</span>
    </template>
    <template #option="{ scope }">
      <el-button @click="console.log(scope.row.name)">打印名字</el-button>
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

const tableData = ref([
  {
    name: 'lc',
    age: 34,
    sex: '男'
  },
  {
    name: 'ww',
    age: 41,
    sex: '女'
  }
])

const selectAll = ref(false)
const chage = (value: any) => {
  console.log(selectAll.value)
}
</script>

<style scoped></style>