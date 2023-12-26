<template>
  <div id="baseMap" ref="mapRef" class="w-full h-full"></div>
</template>

<script setup lang="ts">
  import { useLeaflet } from '@/hooks'
  const { mapRef } = useLeaflet(
    'baseMap',
    'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.jpg',
    [23.445, 120.35]
  )
</script>
