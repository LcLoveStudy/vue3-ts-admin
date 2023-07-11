<template>
  <autoRadio type="checkbox" v-model:value="value"
    :option="[{ label: '你好', value: 'good' }, { label: '不好', value: 'bad' }]" @change="change" />
</template>

<script setup lang="ts">
import autoRadio from '@/components/autoRadio/index.vue'
import { ref } from 'vue'
const value = ref([])
const change = () => {
  console.log(value.value)
}
</script>

<style scoped lang="less"></style>