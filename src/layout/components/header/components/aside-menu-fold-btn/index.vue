<template>
  <el-icon class="fold_icon" @click="asideMenuFold = !asideMenuFold">
    <Expand v-if="asideMenuFold" />
    <Fold v-else />
  </el-icon>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useLayoutStore } from '@/stores/modules/layout'
  const { asideMenuFold } = storeToRefs(useLayoutStore())
</script>

<style lang="less" scoped>
  .fold_icon {
    width: 65px;
    height: 100%;
    display: flex;
    font-size: 1.8rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .fold_icon:hover {
    background-color: var(--hover-backgroundColor);
  }
</style>
