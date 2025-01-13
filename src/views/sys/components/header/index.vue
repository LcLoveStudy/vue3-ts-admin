<template>
  <div class="my_header">
    <div class="flex items-center h-full">
      <phone-menu />
      <!-- 面包屑导航 -->
      <lc-breadcrumb />
    </div>
    <div class="flex items-center mr-12">
      <ThemeCheckout />
      <logout-button />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ThemeCheckout } from '@/views/login/components/form-side/components'
  import { logoutButton, LcBreadcrumb, PhoneMenu } from './components'
</script>

<style scoped lang="less">
  .my_header {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
  }
</style>
