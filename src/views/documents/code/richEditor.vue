<template>
  <RichEditor v-model:value="inputValue" @change="inputChange" />
</template>

<script setup lang="ts">
import RichEditor from '@/components/richEditor/index.vue'
import { ref } from 'vue'
const inputValue = ref('')
const inputChange = () => {
  console.log(inputValue.value)
}
</script>

<style scoped></style>