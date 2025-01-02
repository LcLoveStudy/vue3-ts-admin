<template>
  <sun-icon @click="theme = 'dark'" v-if="theme === 'light'" />
  <moon-icon @click="theme = 'light'" v-else />
</template>

<script setup lang="ts">
  import SunIcon from '@/components/svg/sun.vue'
  import MoonIcon from '@/components/svg/moon.vue'
  import { useCustomStore } from '@/stores'
  import { storeToRefs } from 'pinia'
  const { theme } = storeToRefs(useCustomStore())
</script>
