<template>
  <RouterView />
</template>

<script setup lang="ts">
  import { useWebsiteTitle } from './hooks'
  useWebsiteTitle()
</script>
