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
            v-if="scope.row.descript.split(':')[0] == 'color'"
            :style="`background:${scope.row.descript.split(':')[1]}`"
          ></span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
  import { getCopy } from '@/utils'
  import { ref } from 'vue'
  const tableData = ref([
    {
      name: '.line-height-1/50',
      descript: 'line-height:1/50px'
    },
    {
      name: '.text-center',
      descript: 'text-align:center'
    },
    {
      name: '.text-left',
      descript: 'text-align: left'
    },
    {
      name: '.text-right',
      descript: 'text-align: right'
    },
    {
      name: '.text-ellipsis',
      descript: '单行文本溢出显示省略号'
    },
    {
      name: '.fs-12/25 ',
      descript: 'font-size: 12px/25px 字体大小12-25px'
    },
    {
      name: '.bold',
      descript: 'font-weight: bold'
    },
    {
      name: '.fw-100/900 ',
      descript: 'font-weight: 100/900 字体加粗100-900'
    },
    {
      name: '.white ',
      descript: 'color: #fff;'
    },
    {
      name: '.black ',
      descript: 'color: #000;'
    },
    {
      name: '.tomato ',
      descript: 'color: tomato;'
    },
    {
      name: '.orange ',
      descript: 'color: orange;'
    },
    {
      name: '.blue ',
      descript: 'color: dodgerblue;'
    },
    {
      name: '.green ',
      descript: 'color: MediumSeaGreen;'
    },
    {
      name: '.gray ',
      descript: 'color: gray;'
    },
    {
      name: '.lightgray ',
      descript: 'color: lightgray;'
    },
    {
      name: '.purple ',
      descript: 'color: SlateBlue;'
    },
    {
      name: '.pink ',
      descript: 'color: pink;'
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
