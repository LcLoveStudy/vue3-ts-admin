<template>
  <div class="w-full h-full flex">
    <div
      class="h-full desktop:p-2 duration-[380ms] overflow-hidden bg-white dark:bg-dark-primary"
      :class="[asideMenuFold ? 'w-[5vw]' : 'w-[15vw]']"
    >
      <slot name="aside"></slot>
    </div>
    <div class="h-full duration-[380ms]" :class="[asideMenuFold ? 'w-[95vw]' : 'w-[85vw]']">
      <div class="h-[7vh] bg-white dark:bg-dark-primary">
        <slot name="header"></slot>
      </div>
      <div class="desktop:p-6 bg-[--container-main-bgc] h-[93vh]">
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
