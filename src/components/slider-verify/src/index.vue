<template>
  <div class="slider_verify_box">
    <div class="slider_rocker"></div>
    <span class="verify_tip">请按住滑块拖动</span>
  </div>
</template>

<script setup lang="ts">
  const rockerMove = () => {
    const rockerDom = document.querySelector('.slider_rocker')
    window.addEventListener('mousedown', (e) => {
      console.log(1)
    })
    window.addEventListener('mouseup', (e) => {
      console.log(2)
    })
  }

  onMounted(() => {
    rockerMove()
  })
</script>

<style scoped lang="less">
  .slider_verify_box {
    position: relative;
    width: 250px;
    height: 40px;
    background-color: pink;
    .slider_rocker {
      position: absolute;
      top: 0;
      left: 0;
      cursor: move;
      z-index: 2;
      height: 100%;
      width: 40px;
      background-color: #fff;
    }
    .verify_tip {
      user-select: none;
      top: 0;
      left: 0;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 12px;
    }
  }
</style>
