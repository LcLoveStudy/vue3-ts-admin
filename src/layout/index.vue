<template>
  <el-container class="container fs-base">
    <!-- 右边头部 -->
    <el-header
      class="header border-0 border-b-[1px] border-solid border-[#ebebeb] dark:border-[#424242] bg-white dark:bg-dark-primary"
    >
      <Header />
    </el-header>
    <!-- 右边主体 -->
    <el-container class="main_container">
      <!-- 侧边菜单栏 -->
      <el-aside class="aside">
        <aside-menu />
      </el-aside>
      <!-- 右边主体 -->
      <el-main class="main scrollbar">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import { AsideMenu, Header } from './components'
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
      height: 7vh;
      z-index: 2;
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
