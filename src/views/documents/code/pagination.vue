<template>
  <ss-pagination
    v-model:current="current"
    v-model:size="size"
    :total="130"
    @current-change="change"
  />
  <h3 class="mt-25">示例</h3>
  <!-- 示例代码 -->
  <pre>
    <code class="language-html fs-14">
    &lt;ss-pagination
      v-model:current="current"
      v-model:size="size"
      :total="130"
      @current-change="change"
    /&gt;

    &lt;script setup lang="ts"&gt;
      const current = ref(1)
      const size = ref(10)
      const change = () => {
        console.log(current.value, size.value)
      }
    &lt;/script&gt;
    </code>
  </pre>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import SsPagination from '@/components/ss-pagination'
  import HowToUseTable from './components/how-to-use-table.vue'
  import highlight from 'highlight.js'
  const current = ref(1)
  const size = ref(10)
  const change = () => {
    console.log(current.value, size.value)
  }
  onMounted(() => {
    highlight.highlightAll()
  })
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
