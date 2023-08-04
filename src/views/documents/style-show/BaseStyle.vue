<template>
  <el-table :data="tableData" class="mb-20 shadow width-800 ml-10" stripe height="80vh">
    <el-table-column label="类名" width="180">
      <template #default="scope">
        {{ scope.row.name }}
        <el-icon>
          <DocumentCopy class="hover-pointer" @click="copyClass(scope.row.name)" />
        </el-icon>
      </template>
    </el-table-column>
    <el-table-column prop="descript" label="说明">
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { getCopy } from '@/utils'
import { ref } from 'vue'
const tableData = ref([
  {
    name: '.shadow',
    descript: '盒子添加阴影'
  },
  {
    name: '.opacity-0/10',
    descript: 'opacity: 0/1;'
  },
  {
    name: '.index-1/10',
    descript: 'z-index: 1/10;'
  },
  {
    name: '.width-full',
    descript: 'width: 100%;'
  },
  {
    name: '.width-half',
    descript: 'width: 50%;'
  },
  {
    name: '.width-1/1920',
    descript: 'width:1-1920px'
  },
  {
    name: '.height-full',
    descript: 'height: 100%;'
  },
  {
    name: '.height-half',
    descript: 'height: 50%;'
  },
  {
    name: '.height-1/1080',
    descript: 'height:1-1080px'
  },
  {
    name: '.m-1/25',
    descript: 'margin: 1px/25px;'
  },
  {
    name: '.ml-1/25',
    descript: 'margin-left: 1px/25px;'
  },
  {
    name: '.mr-1/25',
    descript: 'margin-right: 1px/25px;'
  },
  {
    name: '.mt-1/25',
    descript: 'margin-top: 1px/25px;'
  },
  {
    name: '.mb-1/25',
    descript: 'margin-bottom: 1px/25px;'
  },
  {
    name: '.p-1/25',
    descript: 'padding: 1px/25px;'
  },
  {
    name: '.pl-1/25',
    descript: 'padding-left: 1px/25px;'
  },
  {
    name: '.pr-1/25',
    descript: 'padding-right: 1px/25px;'
  },
  {
    name: '.pt-1/25',
    descript: 'padding-top: 1px/25px;'
  },
  {
    name: '.pb-1/25',
    descript: 'padding-bottom: 1px/25px;'
  },
  {
    name: '.border-box',
    descript: 'box-sizing: border-box;'
  },
  {
    name: '.flex',
    descript: 'display: flex;'
  },
  {
    name: '.block',
    descript: 'display: block;'
  },
  {
    name: '.inline-block',
    descript: 'display: inline-block;'
  },
  {
    name: '.inline',
    descript: 'display: inline;'
  },
  {
    name: '.hidden',
    descript: 'display: none;'
  },
  {
    name: '.scrollbar',
    descript: '设置统一的滚动条'
  },
  {
    name: '.hover-pointer',
    descript: 'cursor: pointer;'
  },
  {
    name: '.hover-not-allow',
    descript: ' cursor: not-allowed;'
  }
])
const copyClass = (className: string) => {
  getCopy(className.split('.')[1])
}
</script>

<style scoped lang="less"></style>