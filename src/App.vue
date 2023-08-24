<template>
  <RouterView />
</template>

<script setup lang="ts">
  import { useTitle } from '@vueuse/core'
  const route = useRoute()
  watch(
    () => route.path,
    () => {
      useTitle((route.meta.title as string) + ' - v3-template')
    },
    {
      immediate: true
    }
  )
</script>
