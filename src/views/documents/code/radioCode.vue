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
    v-model:value="value"
    :option="[
      { label: '你好', value: 'good' },
      { label: '不好', value: 'bad' }
    ]"
    @change="change"
  />
  <RichEditor class="mt-20" v-model:value="inputValue" />
</template>

<script setup lang="ts">
  import RichEditor from '@/components/rich-editor/index.vue'
  import autoRadio from '@/components/auto-radio/index.vue'
  import { ref } from 'vue'
  const value = ref([])
  const change = () => {
    console.log(value.value)
  }

  //源码
  const inputValue = ref(
    `<p style="line-height: 1;"><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(78, 201, 176);">autoRadio</span><span style="color: rgb(0, 0, 0);"> </span><span style="color: rgb(225, 60, 57);">v-model:value</span><span style="color: rgb(0, 0, 0);">="value"</span><span style="color: rgb(225, 60, 57);"> :option=</span><span style="color: rgb(0, 0, 0);">"[{ label: '你好', value: 'good' }, { label: '不好', value: 'bad' }]"</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> </span><span style="color: rgb(235, 144, 58);">@change</span><span style="color: rgb(0, 0, 0);">="change"</span><span style="color: rgb(128, 128, 128);"> /&gt;</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> </span><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(78, 201, 176);">autoRadio</span><span style="color: rgb(225, 60, 57);"> type="checkbox"</span><span style="color: rgb(0, 0, 0);"> </span><span style="color: rgb(225, 60, 57);">v-model:value</span><span style="color: rgb(0, 0, 0);">="value"</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0);"> :option="[{ label: '你好', value: 'good' }, { label: '不好', value: 'bad' }]" </span><span style="color: rgb(235, 144, 58);">@change</span><span style="color: rgb(0, 0, 0);">="change"</span><span style="color: rgb(128, 128, 128);"> /&gt;</span></p><table style="width: 100%;"><tbody><tr><th colSpan="1" rowSpan="1" width="358">参数名</th><th colSpan="1" rowSpan="1" width="229">说明</th></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">v-model:value</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">绑定的值，应当为<span style="color: rgb(225, 60, 57);">string</span>（当type为checkbox时为<span style="color: rgb(225, 60, 57);">array</span>类型）</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">option</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">选项，<span style="color: rgb(225, 60, 57);">应当包含label和value字段</span></td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">@change</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">选中状态发生改变时的回调</td></tr></tbody></table><p><br></p>`
  )
</script>

<style scoped lang="less"></style>
