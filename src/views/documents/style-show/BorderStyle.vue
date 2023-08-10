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
    <el-table-column prop="descript" label="说明">
      <template #default="scope">
        <div class="flex items-center">
          <span>{{ scope.row.descript }}</span>
          <span
            class="ml-20 example border-1"
            v-if="scope.row.descript.split(':')[0].split('-')[1] == 'style'"
            :style="`border-style:${scope.row.descript.split(':')[1]}`"
          ></span>
          <span
            class="ml-20 example border-3"
            v-if="scope.row.descript.split(':')[0].split('-')[1] == 'width'"
          ></span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { getCopy } from '@/utils'
  const tableData = ref([
    {
      name: '.border-dotted',
      descript: 'border-style: dotted;'
    },
    {
      name: '.border-dashed',
      descript: 'border-style: dashed;'
    },
    {
      name: '.border-solid',
      descript: 'border-style: solid;'
    },
    {
      name: '.border-none',
      descript: 'border-style: none;'
    },
    {
      name: '.border-radius1/10',
      descript: 'border-radius: 1px/10px;'
    },
    {
      name: '.border-1/5',
      descript: 'border-width: 1px/5px;'
    },
    {
      name: '.circle',
      descript: ' border-radius: 50%;'
    }
  ])
  const copyClass = (className: string) => {
    getCopy(className.split('.')[1])
  }
</script>

<style scoped lang="less">
  .example {
    display: block;
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }
</style>
