<template>
  <div class="my_header shadow-lg">
    <div class="flex items-center h-full">
      <!-- 折叠图标 -->
      <aside-menu-fold-btn v-if="menuPosition === 'aside'" />
      <!-- 面包屑导航 -->
      <lc-breadcrumb />
    </div>
    <top-menu v-if="menuPosition === 'top'" />
    <div class="flex items-center mr-12">
      <!-- 切换菜单位置 -->
      <menu-position-switch />
      <logout-button />
    </div>
  </div>
</template>

<script setup lang="ts">
  import {
    AsideMenuFoldBtn,
    MenuPositionSwitch,
    TopMenu,
    logoutButton,
    LcBreadcrumb
  } from './components'
  import { useLayoutStore } from '@/stores/modules/layout'
  import { storeToRefs } from 'pinia'
  const { menuPosition } = storeToRefs(useLayoutStore())
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
