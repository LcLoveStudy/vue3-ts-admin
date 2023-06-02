<template>
  <el-container class="container">
    <!-- 右边头部 -->
    <el-header class="header">
      <Header v-model:isCollapse="isCollapse" />
    </el-header>
    <!-- 右边主体 -->
    <el-container>
      <!-- 侧边菜单栏 -->
      <el-aside class="aside">
        <AsideMenu :isCollapse="isCollapse" />
      </el-aside>
      <!-- 右边主体 -->
      <el-main class="main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AsideMenu from '@/components/asideMenu/asideMenu.vue'
import Header from '@/components/header/Header.vue'
import { ref } from 'vue';
// 控制菜单折叠
const isCollapse = ref(false)

</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;

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

  .main {
    background-color: var(--container-main-bgc);
  }
}
</style>