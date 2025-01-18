<template>
  <sys-layout>
    <template #header>
      <my-header />
    </template>
    <template #aside>
      <div class="h-full">
        <div class="h-[90%] overflow-x-hidden overflow-y-auto">
          <aside-menu />
        </div>
        <aside-menu-fold-btn />
      </div>
    </template>
  </sys-layout>
</template>

<script setup lang="ts">
  import SysLayout from '@/layout/sys-layout/index.vue'
  import { AsideMenu, Header as MyHeader, AsideMenuFoldBtn } from './components'
</script>
