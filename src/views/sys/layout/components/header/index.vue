<template>
  <div class="my_header">
    <div class="flex items-center h-full">
      <!-- 折叠图标 -->
      <aside-menu-fold-btn v-if="menuPosition === 'aside'" />
      <!-- 面包屑导航 -->
      <ss-breadcrumb />
    </div>
    <top-menu v-if="menuPosition === 'top'" />
    <div class="flex items-center mr-6">
      <!-- 切换菜单位置 -->
      <menu-position-switch />
      <!-- 全屏 -->
      <el-icon class="mr-6 cursor-pointer" @click="useDocumentFullScreen"><FullScreen /></el-icon>
      <!-- 下拉框 -->
      <username-dropdown />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDocumentFullScreen } from '@/hooks'
  import { AsideMenuFoldBtn, MenuPositionSwitch, TopMenu, UsernameDropdown } from './components'
  import SsBreadcrumb from '@/components/ss-breadcrumb'
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
