<template>
  <div class="w-[12.5rem] leading-10 pl-5 line-clamp-10 text-lg bg-lime-500">首页</div>
  <div class="mt-2.5 pl-5">测试一下tailwindcss</div>
  <el-input v-model="input" style="width: 240px" @input="inputHandler" />
</template>

<script setup lang="ts">
  import { debounce } from '@/utils/debounce'

  // import { getList } from '@/api'
  const input = ref('')
  const inputHandler = debounce(
    () => {
      console.log(input.value)
    },
    1000,
    true
  )
  // getList({})
</script>
