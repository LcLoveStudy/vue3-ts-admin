<template>
  <ss-select
    v-model:value="selectValue"
    filterable
    :options="options"
    multiple
    width="300px"
    @change="selectChange"
  />
  <!-- 示例代码 -->
  <pre>
    <code class="language-html fs-14">
    &lt;ss-select
      v-model:value="selectValue"
      filterable
      :options="options"
      multiple
      width="300px"
      @change="selectChange"
    /&gt;

    &lt;script setup lang="ts"&gt;
      const selectValue = ref(1)
      const options = [
        {
          value: 1,
          label: '你好'
        },
        {
          value: 2,
          label: '你好w'
        },
        {
          value: 3,
          label: '你好w2'
        }
      ]
      const selectChange = () => {
        console.log(selectValue.value)
      }
    &lt;/script&gt;
    </code>
  </pre>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import SsSelect from '@/components/ss-select'
  import highlight from 'highlight.js'
  import HowToUseTable from '../components/how-to-use-table.vue'
  const selectValue = ref(1)
  const options = [
    {
      value: 1,
      label: '你好'
    },
    {
      value: 2,
      label: '你好w'
    },
    {
      value: 3,
      label: '你好w2'
    }
  ]
  const selectChange = () => {
    console.log(selectValue.value)
  }

  onMounted(() => {
    highlight.highlightAll()
  })

  const howToUse = ref([
    {
      propName: 'v-model:value',
      mean: '绑定值',
      type: 'String, Number, Array',
      default: '-'
    },
    {
      propName: 'options',
      mean: '选项',
      type: 'Array',
      default: '每一项都需要包含value:string|number,label:string|number两个属性,disabled为可选'
    },
    {
      propName: 'placeholder',
      mean: '占位符',
      type: 'string',
      default: '请选择'
    },
    {
      propName: 'multiple',
      mean: '是否允许多选',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'maxCollapseTags',
      mean: '多选时超过多少个就不显示了',
      type: 'Number',
      default: '4'
    },
    {
      propName: 'disabled',
      mean: '是否允许禁用',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'filterable',
      mean: '是否允许过滤',
      type: 'boolean',
      default: 'true'
    },
    {
      propName: 'width',
      mean: '下拉框组件的宽度',
      type: 'String',
      default: '200px'
    }
  ])
</script>
