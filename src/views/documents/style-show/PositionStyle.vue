<template>
  <el-table :data="tableData" class="mb-20 shadow width-800 ml-10" stripe>
    <el-table-column label="类名" width="180">
      <template #default="scope">
        {{ scope.row.name }}
        <el-icon>
          <DocumentCopy class="hover-pointer" @click="copyClass(scope.row.name)" />
        </el-icon>
      </template>
    </el-table-column>
    <el-table-column prop="descript" label="说明"></el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { getCopy } from '@/utils'
  const tableData = ref([
    {
      name: '.static',
      descript: 'position: static;'
    },
    {
      name: '.fixed',
      descript: 'position: fixed;'
    },
    {
      name: '.absolute',
      descript: 'position: absolute;'
    },
    {
      name: '.relative',
      descript: 'position: relative;'
    },
    {
      name: '.sticky',
      descript: 'position: sticky;'
    }
  ])
  const copyClass = (className: string) => {
    getCopy(className.split('.')[1])
  }
</script>

<style scoped lang="less"></style>
