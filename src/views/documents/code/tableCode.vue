<template>
  <div>
    <AutoTable :tableData="tableData" :columnData="columnData" :selection="true" />
  </div>
</template>

<script setup lang="ts">
import AutoTable from '@/components/autoTable/index.vue'
import { ref } from 'vue'
const columnData = ref([
  {
    prop: 'name',
    label: '姓名',
    width: '',
    sortable: false
  },
  {
    prop: 'age',
    label: '年龄',
    width: '',
    sortable: true,
    filters: [
      { text: '34', value: 34 },
      { text: '41', value: 41 }
    ],
    filterMethod: (value: string, row: any, column: any) => {
      const property = column['property']
      return row[property] > value || row[property] == value
    }
  }
])

const tableData = ref([
  {
    name: 'lc',
    age: 34
  },
  {
    name: 'ww',
    age: 41
  }
])
</script>

<style scoped></style>