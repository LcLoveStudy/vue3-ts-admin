<template>
  <RouterView />
</template>

<script setup lang="ts">
  import { useTitle } from '@vueuse/core'
  import { ConstKeys } from '@/enums/const-enums'
  const route = useRoute()
  watch(
    () => route.path,
    () => {
      useTitle((route.meta.title as string) + ConstKeys.PROJECTNAME)
    },
    {
      immediate: true
    }
  )
</script>
