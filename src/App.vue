<template>
  <RouterView />
</template>

<script setup lang="ts">
  import { useTitle } from '@/hooks'
  import { ConstEnums } from '@/enums/const-enums'
  const route = useRoute()
  const title = useTitle('')
  watch(
    () => route.path,
    () => {
      title.value = `${route.meta.title} - ${ConstEnums.PROJECT_NAME}`
    },
    {
      immediate: true
    }
  )
</script>
