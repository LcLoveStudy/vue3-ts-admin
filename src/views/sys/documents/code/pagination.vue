<template>
  <lc-pagination v-model="page" @change="change" />
  <h3 class="mt-6">示例</h3>
  <!-- 示例代码 -->
  <pre>
    <code class="language-html text-sm">
    &lt;lc-pagination v-model="page" @change="change" /&gt;

    &lt;script setup lang="ts"&gt;
      const page = reactive({
        current: 1,
        size: 10,
        total: 100
      })
      const change = () => {
        console.log(page.current, page.size)
      }
    &lt;/script&gt;
    </code>
  </pre>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import HowToUseTable from '../components/how-to-use-table.vue'
  import highlight from 'highlight.js'
  const page = reactive({
    current: 1,
    size: 10,
    total: 100
  })
  const change = () => {
    console.log(page.current, page.size)
  }
  onMounted(() => {
    highlight.highlightAll()
  })
  const howToUse = ref([
    {
      propName: 'v-model',
      mean: '当前分页信息',
      type: '{current: number, size: number, total: number}',
      default: '-'
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
