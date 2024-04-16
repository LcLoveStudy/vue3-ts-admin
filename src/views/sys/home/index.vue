<template>
  <div class="w-[12.5rem] leading-10 pl-5 line-clamp-10 text-lg bg-lime-500">首页</div>
  <div class="mt-2.5 pl-5">测试一下tailwindcss</div>
  <div class="file_container h-[20rem] w-[20rem] border-[1px] border-solid border-black"></div>
</template>

<script setup lang="ts">
  import { pasteImg } from '@/utils'

  // import { getList } from '@/api'
  // getList({})
  onMounted(() => {
    pasteImg(document.querySelector('.file_container') as HTMLElement)
  })
</script>
