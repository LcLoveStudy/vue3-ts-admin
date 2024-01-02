<template>
  <el-container class="container fs-base">
    <!-- 右边头部 -->
    <el-header class="header">
      <Header v-model:isCollapse="isCollapse" />
    </el-header>
    <!-- 右边主体 -->
    <el-container class="main_container">
      <!-- 侧边菜单栏 -->
      <el-aside class="aside" v-if="menuPosition == 'aside'">
        <aside-menu :isCollapse="isCollapse" />
      </el-aside>
      <!-- 右边主体 -->
      <el-main class="main scrollbar">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import AsideMenu from './components/aside-menu'
  import Header from './components/header/index.vue'
  import { useLayoutStore } from '@/stores/modules/layout'
  import { storeToRefs } from 'pinia'
  const { menuPosition } = storeToRefs(useLayoutStore())

  /** 是否折叠侧边菜单 */
  const isCollapse = ref(false)
</script>

<style scoped lang="less">
  .container {
    min-width: 100%;
    max-width: 100%;
    height: 100%;
    font-size: 16px;
    .aside {
      height: 100%;
      width: auto;
      overflow: hidden;
    }

    .header {
      padding: 0;
      height: 7%;
      background-color: var(--container-bgc);
      border-bottom: 1px solid var(--hover-backgroundColor);
    }
    .main_container {
      height: 96%;
      overflow-y: auto;
      .main {
        background: var(--container-main-bgc);
        padding-bottom: 20px;
      }
    }
  }
</style>
