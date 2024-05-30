<template>
  <el-switch
    v-model="changeMenu"
    inline-prompt
    active-text="头部菜单"
    inactive-text="侧边菜单"
    @change="menuChange"
  />
</template>

<script setup lang="ts">
  import { useLayoutStore } from '@/stores/modules/layout'
  import { storeToRefs } from 'pinia'
  const { menuPosition } = storeToRefs(useLayoutStore())
  // 是否改变菜单位置
  const changeMenu = ref(menuPosition.value === 'top')
  // 改变菜单位置
  const menuChange = () => {
    menuPosition.value = changeMenu.value ? 'top' : 'aside'
  }
</script>

<style scoped></style>
