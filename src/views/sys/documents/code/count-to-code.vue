<template>
  <el-card class="width-300">
    <CountTo
      :start-val="100"
      :end-val="2000"
      color="green"
      :font-size="30"
      :font-weight="600"
      prefix="$"
    />
  </el-card>
  <h3 class="mt-6">示例</h3>
  <!-- 示例代码 -->
  <pre class="w-200">
    <code class="language-html text-sm">
    &lt;CountTo
      :start-val="100"
      :end-val="2000"
      color="green"
      :font-size="30"
      :font-weight="600"
      prefix="$"
    /&gt;
    </code>
  </pre>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import CountTo from '@/components/count-to'
  import highlight from 'highlight.js'
  import HowToUseTable from '../components/how-to-use-table.vue'
  onMounted(() => {
    highlight.highlightAll()
  })

  const howToUse = ref([
    {
      propName: 'start-val',
      mean: '开始的值',
      type: 'number',
      default: '0'
    },
    {
      propName: 'end-val',
      mean: '目标值',
      type: 'number',
      default: '2023'
    },
    {
      propName: 'font-size',
      mean: '字体大小',
      type: 'number',
      default: '16'
    },
    {
      propName: 'font-weight',
      mean: '字体粗细',
      type: 'number',
      default: '400'
    },
    {
      propName: 'color',
      mean: '字体颜色',
      type: 'string',
      default: '#000'
    },
    {
      propName: 'duration',
      mean: '延续时间',
      type: 'number',
      default: '1500'
    },
    {
      propName: 'autoplay',
      mean: '是否自动播放',
      type: 'boolean',
      default: 'true'
    },
    {
      propName: 'prefix',
      mean: '前缀',
      type: 'string',
      default: '-'
    },
    {
      propName: 'suffix',
      mean: '后缀',
      type: 'string',
      default: '-'
    }
  ])
</script>
