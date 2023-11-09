<template>
  <div
    :id="id"
    class="text-ellipsis"
    :style="{ height: maxLines * 1.5 + 'rem' }"
    :class="ellipsisPosition === 'end' ? 'ellipsis_end' : ''"
  >
    {{ showText }}
  </div>
</template>

<script setup lang="ts">
  import type { PropType } from 'vue'
  const id = Math.random().toString()

  const props = defineProps({
    text: {
      type: String,
      required: true
    },
    ellipsisPosition: {
      type: String as PropType<'start' | 'center' | 'end'>,
      default: 'end',
      validator: (val: string) => ['start', 'center', 'end'].includes(val)
    },
    maxLines: {
      type: Number,
      default: 1
    },
    maxWidth: {
      type: String,
      default: '100%'
    }
  })

  const showText = ref('')

  const computeText = () => {
    const el = document.getElementById(id) as HTMLDivElement
    const startIndex = (el.clientWidth / 16) * props.maxLines - 1
    return props.text.slice(0, startIndex) + '...'
  }

  onMounted(() => {
    showText.value = computeText()
  })
</script>

<style scoped lang="less">
  .text-ellipsis {
    width: v-bind('maxWidth');
    overflow: hidden;
    line-height: 1.5rem;
  }
</style>
