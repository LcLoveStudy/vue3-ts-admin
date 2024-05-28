<template>
  <RouterView />
</template>

<script setup lang="ts">
  import { useTitle } from '@vueuse/core'
  import { ConstEnums } from '@/enums/const-enums'
  const route = useRoute()
  const title = ref('')
  watch(
    () => route.path,
    () => {
      title.value = `${route.meta.title} - ${ConstEnums.PROJECT_NAME}`
      useTitle(title.value)
    },
    {
      immediate: true
    }
  )
</script>
