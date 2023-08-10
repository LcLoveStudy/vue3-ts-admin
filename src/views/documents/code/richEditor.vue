<template>
  <RichEditor v-model:value="inputValue" @change="inputChange" />
</template>

<script setup lang="ts">
  import RichEditor from '@/components/rich-editor/index.vue'
  const inputValue = ref(
    `<p><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(78, 201, 176);">RichEditor</span><span style="color: rgb(225, 60, 57);"> v-model:value="inputValue" @change="</span><span style="color: rgb(255, 169, 64);">inputChange</span><span style="color: rgb(225, 60, 57);">" </span><span style="color: rgb(128, 128, 128);">/&gt;</span></p><p>const inputValue = ref('')</p><p>const inputChange = () =&gt; {</p><p> &nbsp;console.log(inputValue.value)</p><p>}</p>`
  )
  const inputChange = () => {
    console.log(inputValue.value)
  }
</script>

<style scoped></style>
