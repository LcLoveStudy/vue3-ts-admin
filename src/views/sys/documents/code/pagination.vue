<template>
  <lc-pagination v-model:current="current" v-model:size="size" :total="130" @change="change" />
  <h3 class="mt-6">示例</h3>
  <!-- 示例代码 -->
  <pre>
    <code class="language-html text-sm">
    &lt;lc-pagination
      v-model:current="current"
      v-model:size="size"
      :total="130"
      @change="change"
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
  import HowToUseTable from '../components/how-to-use-table.vue'
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
      propName: '@change',
      mean: '当前页或每页大小发生改变时触发',
      type: 'function',
      default: '-'
    }
  ])
</script>

<style scoped></style>
@/components/lc-pagination
