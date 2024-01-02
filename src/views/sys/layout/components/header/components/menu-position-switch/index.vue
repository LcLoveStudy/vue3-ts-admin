<template>
  <el-switch
    class="mr-6"
    v-model="changeMenu"
    inline-prompt
    active-text="头部菜单"
    inactive-text="侧边菜单"
    @change="menuChange"
  />
</template>

<script setup lang="ts">
  import { useLayoutStore } from '@/stores/modules/layout'
  const { getMenuPosition, setMenuPosition } = useLayoutStore()
  // 是否改变菜单位置
  const changeMenu = ref(getMenuPosition())
  // 改变菜单位置
  const menuChange = () => {
    setMenuPosition(changeMenu.value ? 'top' : 'aside')
  }
</script>

<style scoped></style>
