<template>
  <autoRadio
    v-model:value="value"
    :option="[
      { label: '你好', value: 'good' },
      { label: '不好', value: 'bad' }
    ]"
    @change="change"
  />
  <autoRadio
    type="checkbox"
    v-model:value="value2"
    :option="[
      { label: '你好', value: 'good' },
      { label: '不好', value: 'bad' }
    ]"
    @change="change"
  />
  <!-- 案例 -->
  <!-- 示例代码 -->
  <pre>
    <code class="language-html fs-14">
    &lt;autoRadio
      v-model:value="value"
      :option="[
        { label: '你好', value: 'good' },
        { label: '不好', value: 'bad' }
      ]"
      @change="change"
    /&gt;

    &lt;autoRadio
      type="checkbox"
      v-model:value="value2"
      :option="[
        { label: '你好', value: 'good' },
        { label: '不好', value: 'bad' }
      ]"
      @change="change"
    /&gt;

    &lt;script setup lang="ts"&gt;
      const value = ref('good')
      const value2 = ref([])
      const change = () => {
        console.log(value.value, value2.value)
      }
    &lt;/script&gt;
    </code>
  </pre>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import autoRadio from '@/components/auto-radio'
  import HowToUseTable from './components/how-to-use-table.vue'
  import highlight from 'highlight.js'
  const value = ref('good')
  const value2 = ref([])
  const change = () => {
    console.log(value.value, value2.value)
  }
  onMounted(() => {
    highlight.highlightAll()
  })
  const howToUse = ref([
    {
      propName: 'v-model:value',
      mean: '绑定值',
      type: '当type为radio时为String；当type为checkbox时为Array',
      default: '-'
    },
    {
      propName: 'option',
      mean: '选项',
      type: 'Array',
      default: '每一项都需要包含value:string|number,label:string|number两个属性,disabled为可选'
    },
    {
      propName: 'type',
      mean: '类型',
      type: 'string',
      default: 'radio(单选框)|checkbox(多选框)'
    },
    {
      propName: '@change',
      mean: '当前选择变时触发',
      type: 'function',
      default: '-'
    }
  ])
</script>

<style scoped lang="less"></style>
