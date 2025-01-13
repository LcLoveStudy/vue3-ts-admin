<template>
  <div class="flex items-center phone:text-6xl tablet:text-base">
    <SliderVerify ref="slider" v-model:status="status" @on-success="successHandler" />
    <el-button class="ml-4" @click="resetVerify">重置</el-button>
  </div>
  <h3 class="phone:mt-[24px] tablet:mt-6 phone:text-6xl tablet:text-base">示例</h3>
  <!-- 示例代码 -->
  <pre class="w-200">
    <code class="language-html phone:text-6xl tablet:text-sm">
    &lt;SliderVerify ref="slider" v-model:status="status" @on-success="successHandler"/&gt;
    &lt;el-button class="ml-4" @click="resetVerify"/&gt;重置&lt;/el-button/&gt;
    &lt;script setup lang="ts"&gt;
      const slider = ref()
      const status = ref(false)
      const successHandler = () => {
        ElMessage.success('验证成功')
      }
      const resetVerify = () => {
        slider.value.reset()
      }
    &lt;/script&gt;
    </code>
  </pre>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import SliderVerify from '@/components/slider-verify'
  import { ElMessage } from 'element-plus'
  import highlight from 'highlight.js'
  import HowToUseTable from '../components/how-to-use-table.vue'
  onMounted(() => {
    highlight.highlightAll()
  })

  const slider = ref()
  const status = ref(false)
  const successHandler = () => {
    ElMessage.success('验证成功')
  }
  const resetVerify = () => {
    slider.value.reset()
  }

  const howToUse = ref([
    {
      propName: 'v-model:status',
      mean: '验证状态',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'width',
      mean: '组件宽度,最小180px',
      type: 'string',
      default: '250px'
    },
    {
      propName: '@on-success',
      mean: '验证成功时触发',
      type: 'function',
      default: '-'
    },
    {
      propName: 'reset',
      mean: '组件方法,重置状态(获取组件dom,调用reset方法)',
      type: 'function',
      default: '-'
    }
  ])
</script>
