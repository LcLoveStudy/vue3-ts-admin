<template>
  <div>
    <AutoTable :tableData="[]" :columnData="columnData" :selection="true"/>
  </div>
</template>

<script setup lang="ts">
import AutoTable from '@/components/autoTable/index.vue'
import {ref} from 'vue'
const columnData = ref([
  {
    props:'name',
    label:'姓名',
    width:'300',
    sortable:false
  },
  {
    props:'age',
    label:'年龄',
    width:'100',
    sortable:true
  }
])
</script>

<style scoped>

</style>