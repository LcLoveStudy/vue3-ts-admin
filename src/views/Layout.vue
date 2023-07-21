<template>
  <el-container class="container fs-16">
    <!-- 右边头部 -->
    <el-header class="header">
      <Header v-model:isCollapse="isCollapse" :menuOnTop="menuOnTop" :user-type="userType" />
    </el-header>
    <!-- 右边主体 -->
    <el-container>
      <!-- 侧边菜单栏 -->
      <el-aside class="aside" v-if="!menuOnTop">
        <AsideMenu :isCollapse="isCollapse" :userType="userType" />
      </el-aside>
      <!-- 右边主体 -->
      <el-main class="main scrollbar">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import AsideMenu from '@/components/menu/asideMenu.vue'
import Header from '@/components/header/Header.vue'
import { ref } from 'vue'
/** 是否折叠侧边菜单 */
const isCollapse = ref(false)
/** 菜单是否在顶部 */
const menuOnTop = ref(false)
/** 用户权限 */
const userType = ref('admin')

</script>

<style scoped lang="less">
.container {
  width: 100%;
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

  .main {
    background-color: var(--container-main-bgc);
    height: 100%;
    overflow: auto;
  }
}
</style>