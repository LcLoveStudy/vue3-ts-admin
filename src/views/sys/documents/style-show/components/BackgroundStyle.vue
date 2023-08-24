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
        <div class="flex">
          <span>{{ scope.row.descript }}</span>
          <span
            class="example"
            v-if="scope.row.descript.split(':')[0].split('-')[1] == 'color'"
            :style="`background:${scope.row.descript.split(':')[1]}`"
          ></span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { useCopy } from '@/utils'
  const tableData = ref([
    {
      name: '.bg-repeat',
      descript: 'background-repeat: repeat;'
    },
    {
      name: '.bg-norepeat',
      descript: 'background-repeat: no-repeat;'
    },
    {
      name: '.bg-repeat-x',
      descript: 'background-repeat: repeat-x;'
    },
    {
      name: '.bg-repeat-y',
      descript: 'background-repeat: repeat-y;'
    },
    {
      name: '.bgc-white',
      descript: 'background-color: #fff;'
    },
    {
      name: '.bgc-black',
      descript: 'background-color: #000;'
    },
    {
      name: '.bgc-tomato',
      descript: 'background-color:tomato;'
    },
    {
      name: '.bgc-orange',
      descript: 'background-color:orange;'
    },
    {
      name: '.bgc-blue',
      descript: 'background-color:dodgerblue;'
    },
    {
      name: '.bgc-green',
      descript: 'background-color:MediumSeaGreen;'
    },
    {
      name: '.bgc-gray',
      descript: 'background-color:gray;'
    },
    {
      name: '.bgc-lightgray',
      descript: 'background-color: LightGray;'
    },
    {
      name: '.bgc-purple',
      descript: 'background-color: SlateBlue;'
    },
    {
      name: '.bgc-pink',
      descript: 'background-color:Violet;'
    }
  ])
  const copyClass = (className: string) => {
    useCopy(className.split('.')[1])
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
