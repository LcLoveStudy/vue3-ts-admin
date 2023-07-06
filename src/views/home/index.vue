<template>
  <div class="mb-20 fs-20 fw-700">
    home
  </div>
  <RichEditor v-model:value="inputValue" @change="inputChange" />
</template>

<script setup lang="ts">
import { getList } from '@/api'
import RichEditor from '@/components/richEditor/index.vue'
import { ref } from 'vue'
const inputValue = ref('')
const inputChange = () => {
  console.log(inputValue.value)
}
getList({ page: 1 })
</script>

<style scoped></style>