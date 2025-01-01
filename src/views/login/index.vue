<template>
  <div class="h-full grid tablet:grid-cols-[2fr_1fr]">
    <primary-side />
    <form-side />
  </div>
</template>

<script setup lang="ts">
  import { PrimarySide, FormSide } from './components'
</script>
