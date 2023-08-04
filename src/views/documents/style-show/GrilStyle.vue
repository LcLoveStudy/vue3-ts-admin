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
    </el-table-column>
  </el-table>
  <span>父盒子类名: .col</span>
  <div class="example col">
    <div class="col-2 item">.col-2</div>
    <div class="col-3 item">.col-3</div>
    <div class="col-4 item">.col-4</div>
    <div class="col-3 item">.col-3</div>
  </div>
  <div class="mt-20 mb-20 ">
    <span>父盒子类名: .row</span>
    <div class="example row">
      <div class="row-2 item">.row-2</div>
      <div class="row-3 item">.row-3</div>
      <div class="row-4 item">.row-4</div>
      <div class="row-3 item">.row-3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getCopy } from '@/utils'
import { ref } from 'vue'
const tableData = ref([
  {
    name: '.col',
    descript: '用于父元素，对盒模型的宽度进行切割12份'
  },
  {
    name: '.col-1/12',
    descript: '父元素使用.col后，子元素使用.col-1代表占父元素宽度的1份,最大为.col-12，当所有子元素的总和大于12时，会换行显示'
  },
  {
    name: '.row',
    descript: '用于父元素，对盒模型的高度进行切割12份'
  },
  {
    name: '.row-1/12',
    descript: '父元素使用.row后，子元素使用.row-1代表占父元素高度的1份,最大为.row-12，当所有子元素的总和大于12时，会换行显示'
  },
])
const copyClass = (className: string) => {
  getCopy(className.split('.')[1])
}
</script>

<style scoped lang="less">
.example {
  width: 800px;
  height: 200px;
  border: 1px solid #ccc;
}

.example.col {
  border-right: none;
}

.example.row {
  border-bottom: none;
}

.col .item {
  border-right: 1px solid #ccc;
}

.row .item {
  border-bottom: 1px solid #ccc;
}
</style>