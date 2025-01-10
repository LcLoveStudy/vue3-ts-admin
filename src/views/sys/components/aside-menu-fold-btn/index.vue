<template>
  <div class="fold_icon tablet:px-2 rounded" :class="[asideMenuFold ? '' : 'tablet:ml-4']">
    <el-icon class="text-black dark:text-white" @click="asideMenuFold = !asideMenuFold">
      <Expand v-if="asideMenuFold" />
      <Fold v-else />
    </el-icon>
  </div>
</template>

<script setup lang="ts">
  import { storeToRefs } from 'pinia'
  import { useCustomStore } from '@/stores'
  const { asideMenuFold } = storeToRefs(useCustomStore())
</script>

<style lang="less" scoped>
  .fold_icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    cursor: pointer;
  }

  .fold_icon:hover {
    background-color: var(--hover-backgroundColor);
  }
</style>
