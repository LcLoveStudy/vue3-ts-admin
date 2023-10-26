<template>
  <div class="slider_verify_box">
    <!-- 滑块 -->
    <div ref="rockerDom" class="slider_rocker">
      <el-icon v-if="!isEnd"><SwitchButton /></el-icon>
      <el-icon v-else><Select /></el-icon>
    </div>
    <!-- 未拖拽到的部分 -->
    <div class="fail_bar"></div>
    <!-- 文字提示 -->
    <span class="verify_tip" :style="{ color: isEnd ? '#fff' : '#000' }">
      {{ isEnd ? '验证通过' : '请按住滑块拖动' }}
    </span>
  </div>
</template>

<script setup lang="ts">
  defineProps({
    status: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '250px'
    }
  })

  const emits = defineEmits(['onSuccess', 'update:status'])

  /** 是否拖拽到底部 */
  const isEnd = ref(false)

  /** 鼠标是否在滑块上 */
  const selectRocker = ref(false)

  /** 滑块的dom */
  const rockerDom = ref<HTMLDivElement>()

  /** 滑块一开始的x值 */
  let rockerInitPlace = 0

  /** 鼠标按下时的x值 */
  let cursorInitPlace = 0

  /** 处理鼠标按下 */
  const mouseDownHandler = (e: MouseEvent) => {
    if (rockerDom.value?.contains(e.target as Node)) {
      cursorInitPlace = e.x
      selectRocker.value = true
    }
  }

  /** 处理鼠标抬起 */
  const mouseUpHandler = () => {
    if (selectRocker.value) {
      const sliderBoxDom = document.querySelector('.slider_verify_box') as HTMLDivElement
      selectRocker.value = false
      cursorInitPlace = 0
      if (
        (rockerDom.value as HTMLDivElement).style.left !==
        sliderBoxDom?.clientWidth - (rockerDom.value as HTMLDivElement).clientWidth + 'px'
      ) {
        ;(document.querySelector('.fail_bar') as HTMLDivElement).style.left = '0px'
        ;(rockerDom.value as HTMLDivElement).style.left = '0px'
      } else {
        isEnd.value = true
      }
    }
  }

  /** 处理鼠标移动 */
  const mouseMoveHandler = (e: MouseEvent) => {
    const sliderBoxDom = document.querySelector('.slider_verify_box')
    if (sliderBoxDom?.contains(e.target as Node)) {
      if (selectRocker.value) {
        // 滑块应该移动的距离 = 鼠标目前x - 滑块初始的x - (鼠标按下时的x - 滑块初始的x)
        const moveDistance = e.x - rockerInitPlace - (cursorInitPlace - rockerInitPlace)
        const failBarDom = document.querySelector('.fail_bar') as HTMLDivElement
        failBarDom.style.left =
          moveDistance + (rockerDom.value as HTMLDivElement).clientWidth + 'px'
        if (moveDistance <= 0) {
          isEnd.value = false
          ;(rockerDom.value as HTMLDivElement).style.left = '0px'
        } else if (
          moveDistance >=
          sliderBoxDom?.clientWidth - (rockerDom.value as HTMLDivElement).clientWidth - 10
        ) {
          isEnd.value = true
          ;(rockerDom.value as HTMLDivElement).style.left =
            sliderBoxDom?.clientWidth - (rockerDom.value as HTMLDivElement).clientWidth + 'px'
        } else {
          isEnd.value = false
          ;(rockerDom.value as HTMLDivElement).style.left = moveDistance + 'px'
        }
      }
    } else {
      // 如果鼠标离开了滑块盒子就停止
      mouseUpHandler()
    }
  }

  /** 重置 */
  const resetVerify = () => {
    ;(document.querySelector('.fail_bar') as HTMLDivElement).style.left = '0px'
    ;(rockerDom.value as HTMLDivElement).style.left = '0px'
    isEnd.value = false
  }

  /** 监听完成状态 */
  watch(
    () => isEnd.value,
    () => {
      if (isEnd.value) {
        window.removeEventListener('mousedown', mouseDownHandler)
        window.removeEventListener('mouseup', mouseUpHandler)
        window.removeEventListener('mousemove', mouseMoveHandler)
        emits('update:status', true)
        emits('onSuccess')
      } else {
        window.addEventListener('mousedown', mouseDownHandler)
        window.addEventListener('mouseup', mouseUpHandler)
        window.addEventListener('mousemove', mouseMoveHandler)
        emits('update:status', false)
      }
    }
  )
  /** 初始化时执行 */
  const rockerMove = () => {
    window.addEventListener('mousedown', mouseDownHandler)
    window.addEventListener('mouseup', mouseUpHandler)
    window.addEventListener('mousemove', mouseMoveHandler)
  }

  onMounted(() => {
    rockerDom.value = document.querySelector('.slider_rocker') as HTMLDivElement
    rockerInitPlace = rockerDom.value.getBoundingClientRect().x
    rockerMove()
  })

  defineExpose({
    name: 'SliderVerify',
    reset: resetVerify
  })

  onBeforeUnmount(() => {
    window.removeEventListener('mousedown', mouseDownHandler)
    window.removeEventListener('mouseup', mouseUpHandler)
    window.removeEventListener('mousemove', mouseMoveHandler)
  })
</script>

<style scoped lang="less">
  .slider_verify_box {
    border: 1px solid #ccc;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    min-width: 180px;
    width: v-bind(width);
    height: 40px;
    background-color: #67c23a;
    .slider_rocker {
      position: absolute;
      top: 0;
      left: 0;
      cursor: move;
      z-index: 2;
      height: 100%;
      width: 40px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .verify_tip {
      user-select: none;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      font-size: 12px;
    }
    .fail_bar {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background-color: #eee;
    }
  }
</style>
