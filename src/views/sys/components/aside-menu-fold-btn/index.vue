<template>
  <el-button
    @click="asideMenuFold = !asideMenuFold"
    :class="[asideMenuFold ? '' : 'tablet:ml-4']"
    class="tablet:px-2"
    type="primary"
    text
    bg
    :icon="asideMenuFold ? Expand : Fold"
  ></el-button>
</template>

<script setup lang="ts">
  import { Expand, Fold } from '@element-plus/icons-vue'
  import { storeToRefs } from 'pinia'
  import { useCustomStore } from '@/stores'
  const { asideMenuFold } = storeToRefs(useCustomStore())
</script>
