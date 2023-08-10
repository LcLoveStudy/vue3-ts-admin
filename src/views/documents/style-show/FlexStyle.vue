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
  import { useCopy } from '@/utils'
  const tableData = ref([
    {
      name: '.flex',
      descript: 'display:flex;'
    },
    {
      name: '.flex-col',
      descript: 'flex-direction: column;'
    },
    {
      name: '.flex-1',
      descript: ' flex: 1;'
    },
    {
      name: '.flex-wrap',
      descript: 'flex-wrap: wrap;'
    },
    {
      name: '.flex-nowrap',
      descript: 'flex-wrap: nowrap;'
    },
    {
      name: '.items-start',
      descript: 'align-items: start;'
    },
    {
      name: '.items-center',
      descript: 'align-items: center;'
    },
    {
      name: '.items-end',
      descript: 'align-items: end;'
    },
    {
      name: '.justify-start',
      descript: 'justify-content: flex-start;'
    },
    {
      name: '.justify-center',
      descript: 'justify-content: center;'
    },
    {
      name: '.justify-between',
      descript: 'justify-content: space-between;'
    },
    {
      name: '.justify-around',
      descript: 'justify-content: space-around;'
    },
    {
      name: '.justify-end',
      descript: 'justify-content: flex-end;'
    }
  ])
  const copyClass = (className: string) => {
    useCopy(className.split('.')[1])
  }
</script>

<style scoped lang="less"></style>
