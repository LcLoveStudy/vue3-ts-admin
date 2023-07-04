<template>
  <div>
    <div>
      home
    </div>
    <Vditor v-model:value="inputValue" @change="inputChange" />
  </div>
</template>

<script setup lang="ts">
import Vditor from '@/components/vditor/index.vue'
import { getList } from '@/api/index'
import { ref } from 'vue'
const inputValue = ref('测试一下')
const inputChange = () => {
  console.log(inputValue.value);
}
getList({ page: 1 })
</script>

<style scoped></style>