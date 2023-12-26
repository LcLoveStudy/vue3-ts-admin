<template>
  <div id="baseMap" class="w-full h-full"></div>
</template>

<script setup lang="ts">
  import { useLeaflet } from '@/hooks'
  const { mapRef } = useLeaflet(
    'baseMap',
    'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.jpg',
    [23.445, 120.35],
    {
      miniMap: {
        show: true,
        position: 'topright'
      }
    }
  )
  onMounted(() => {
    console.log(mapRef.value)
  })
</script>
