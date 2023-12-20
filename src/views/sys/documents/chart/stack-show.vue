<template>
  <div class="flex justify-around items-center">
    <stack-chart
      :data="[
        {
          name: '测试1',
          data: [
            {
              name: 'type1',
              value: 320
            },
            {
              name: 'type2',
              value: 200
            },
            {
              name: 'type3',
              value: 250
            }
          ]
        },
        {
          name: '测试2',
          data: [
            {
              name: 'type1',
              value: 302
            },
            {
              name: 'type2',
              value: 302
            },
            {
              name: 'type3',
              value: 200
            }
          ]
        },
        {
          name: '测试3',
          data: [
            {
              name: 'type1',
              value: 301
            },
            {
              name: 'type2',
              value: 100
            },
            {
              name: 'type3',
              value: 301
            }
          ]
        }
      ]"
    />
    <!-- 代码展示 -->
    <pre>
        <h1 class="mb-[-30px]">示例代码</h1>
        <code class="language-html text-sm">
        &lt;stack-chart
            :data="[  { 
                        name: '测试1',
                        data: [   
                                { name: 'type1', value: 320 },
                                { name: 'type2', value: 200 },
                                { name: 'type3', value: 250 }
                              ]
                      },
                      { 
                        name: '测试2',
                        data: [   
                                { name: 'type1', value: 302 },
                                { name: 'type2', value: 302 },
                                { name: 'type3', value: 200 }
                              ]
                      },
                      { 
                        name: '测试3',
                        data: [
                          { name: 'type1', value: 301 },
                          { name: 'type2', value: 100 },
                          { name: 'type3', value: 301 }
                        ]
                      }
                  ]"
            />
        </code>
      </pre>
  </div>
  <HowToUseTable :how-to-use="howToUse" />
</template>

<script setup lang="ts">
  import { StackChart } from '@/components/echarts'
  import HowToUseTable from '../components/how-to-use-table.vue'
  import highlight from 'highlight.js'
  onMounted(() => {
    highlight.highlightAll()
  })
  const howToUse = [
    {
      propName: 'data(必填)',
      mean: '展示的值',
      type: 'Array<{name:string,data:{name:string;value:number}[]}>',
      default: '-'
    },
    {
      propName: 'xAxisName',
      mean: 'x轴的名字',
      type: 'string',
      default: '-'
    },
    {
      propName: 'yAxisName',
      mean: 'y轴的名字',
      type: 'string',
      default: '-'
    },
    {
      propName: 'reverse',
      mean: 'x轴和y轴是否反转',
      type: 'boolean',
      default: 'false'
    },
    {
      propName: 'color-list',
      mean: '柱子颜色，未设置则随机显示',
      type: 'string[]',
      default: '-'
    },
    {
      propName: 'labelColor',
      mean: '柱子中值的字体颜色',
      type: 'string',
      default: '#fff'
    },
    {
      propName: 'width',
      mean: '整个图标的宽度',
      type: 'string',
      default: '400px'
    },
    {
      propName: 'height',
      mean: '整个图标的高度',
      type: 'string',
      default: '400px'
    }
  ]
</script>
