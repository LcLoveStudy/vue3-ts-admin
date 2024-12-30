<template>
  <div class="primary_box flex items-center justify-center">
    <img class="w-1/3 select-none primary_img" :src="PrimaryImg" />
  </div>
</template>

<script setup lang="ts">
  import PrimaryImg from '@/assets/images/login/primary.png'
</script>

<style lang="less" scoped>
  .primary_box {
    /** 径像渐变 */
    background-image: radial-gradient(
      circle at center,
      black 0%,
      black 25%,
      #1e2a47 50%,
      black 75%,
      black 100%
    );
    @keyframes riseAndFall {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
      100% {
        transform: translateY(0);
      }
    }
    .primary_img {
      animation: riseAndFall 2s infinite;
    }
  }
</style>
