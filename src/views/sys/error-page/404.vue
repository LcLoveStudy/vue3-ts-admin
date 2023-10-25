<template>
  <div class="flex flex-col items-center mt-20">
    <div class="mb-10">抱歉，您访问的页面不存在。</div>
    <el-button type="primary" class="w-[10rem]" @click="router.push('/')">回到主页</el-button>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
</script>

<style scoped></style>
