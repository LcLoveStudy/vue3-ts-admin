<template>
  <el-link class="mb-4" type="primary" @click="goWangEditor">
    <span class="text-2xl">wangEditor:一款非常好用简洁的富文本编辑器</span>
  </el-link>
  <RichEditor v-model="inputValue" @change="inputChange" />
</template>

<script setup lang="ts">
  import RichEditor from '@/components/rich-editor'
  const inputValue = ref(
    `<p><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(78, 201, 176);">RichEditor</span><span style="color: rgb(225, 60, 57);"> v-model:value="inputValue" @change="</span><span style="color: rgb(255, 169, 64);">inputChange</span><span style="color: rgb(225, 60, 57);">" </span><span style="color: rgb(128, 128, 128);">/&gt;</span></p><p>const inputValue = ref('')</p><p>const inputChange = () =&gt; {</p><p> &nbsp;console.log(inputValue.value)</p><p>}</p>`
  )
  const inputChange = () => {
    console.log(inputValue.value)
  }

  /** 去富文本编辑器官网 */
  const goWangEditor = () => {
    window.open('https://www.wangeditor.com/v5/for-frame.html#vue3')
  }
</script>

<style scoped></style>
