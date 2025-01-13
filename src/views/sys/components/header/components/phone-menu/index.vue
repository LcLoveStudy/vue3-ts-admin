<template>
  <div>
    <div
      class="p-[5px] ml-[8px] bg-slate-100 dark:bg-slate-800 rounded-6xl"
      @click="drawerVisible = true"
    >
      <el-icon class="text-7xl"><Menu /></el-icon>
    </div>
    <!-- 菜单 -->
    <el-drawer v-model="drawerVisible" direction="ltr" size="60%" header-class="mb-0">
      <template #header>
        <div class="text-7xl">{{ ConstEnums.PROJECT_NAME }}</div>
      </template>
      <div class="h-[80vh] overflow-y-auto">
        <aside-menu />
      </div>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import AsideMenu from '@/views/sys/components/aside-menu/index.vue'
  import { ConstEnums } from '@/enums/const-enums'
  const drawerVisible = ref(false)
</script>

<style lang="less" scoped>
  :deep(.el-drawer__header) {
    margin-bottom: 0;
  }
</style>
