<template>
  <div class="w-full h-full flex">
    <div class="h-full">
      <aside-menu />
    </div>
    <div class="flex-1 h-full">
      <div class="h-[7vh] bg-white dark:bg-dark-primary"><my-header /></div>
      <div class="desktop:p-6 bg-[--container-main-bgc]">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { AsideMenu, Header as MyHeader } from '@/layout/components'
</script>
