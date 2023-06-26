<template>
  <div>
    <div v-clickoutside="clickoutside">
      home
    </div>
    <progress max="100" value="89" />
  </div>
</template>

<script setup lang="ts">
const clickoutside = () => { }
</script>

<style scoped></style>