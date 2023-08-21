<template>
  <autoPagination
    v-model:current="current"
    v-model:size="size"
    :total="130"
    @current-change="change"
  />
  <h3 class="mt-25">示例</h3>
  <!-- 示例代码 -->
  <pre>
    <code>
    &lt;autoPagination
      v-model:current="current"
      v-model:size="size"
      :total="130"
      @current-change="change"
    /&gt;

    script:

    const current = ref(1)
    const size = ref(10)
    const change = () => {
      console.log(current.value, size.value)
    }
    </code>
  </pre>

  <el-table :data="howToUse" style="width: 100%">
    <el-table-column prop="propName" label="参数名" />
    <el-table-column prop="mean" label="说明" width="400" />
    <el-table-column prop="type" label="类型" />
    <el-table-column prop="default" label="默认值" />
  </el-table>
</template>

<script setup lang="ts">
  import autoPagination from '@/components/auto-pagination/index.vue'
  const current = ref(1)
  const size = ref(10)
  const change = () => {
    console.log(current.value, size.value)
  }

  const howToUse = ref([
    {
      propName: 'v-model:current',
      mean: '当前页',
      type: 'number',
      default: '1'
    },
    {
      propName: 'v-model:size',
      mean: '每页大小',
      type: 'number',
      default: '10'
    },
    {
      propName: 'total',
      mean: '数据总数',
      type: 'number',
      default: '100'
    },
    {
      propName: '@current-change',
      mean: '当前页改变时触发',
      type: 'function',
      default: '-'
    }
  ])
</script>

<style scoped></style>
