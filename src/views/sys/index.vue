<template>
  <sys-layout>
    <template #header>
      <my-header />
    </template>
    <template #aside>
      <aside-menu />
    </template>
  </sys-layout>
</template>

<script setup lang="ts">
  import SysLayout from '@/layout/sys-layout/index.vue'
  import { AsideMenu, Header as MyHeader } from './components'
</script>
