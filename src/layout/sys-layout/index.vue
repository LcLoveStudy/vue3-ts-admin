<template>
  <div class="w-full h-full flex">
    <!-- 左边侧边栏 -->
    <div
      class="h-full phone:hidden tablet:block tablet:p-2 duration-[380ms] border-0 border-r-[1px] border-solid border-[#eee] dark:border-[#434343] overflow-hidden bg-white dark:bg-dark-primary"
      :class="[asideMenuFold ? 'w-[5vw]' : 'w-[15vw]']"
    >
      <slot name="aside"></slot>
    </div>
    <!-- 右边主体内容 -->
    <div
      class="h-full duration-[380ms] phone:w-full"
      :class="[asideMenuFold ? 'w-[95vw]' : 'w-[85vw]']"
    >
      <div
        class="h-[7vh] bg-white dark:bg-dark-primary border-0 border-b-[1px] border-solid border-[#eee] dark:border-[#434343]"
      >
        <slot name="header"></slot>
      </div>
      <div class="tablet:p-6 bg-[--container-main-bgc] h-[93vh]">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useCustomStore } from '@/stores'
  import { storeToRefs } from 'pinia'
  const { asideMenuFold } = storeToRefs(useCustomStore())
</script>
