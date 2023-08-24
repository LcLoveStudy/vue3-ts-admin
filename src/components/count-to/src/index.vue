<template>
  <span :style="{ color, fontSize: fontSize + 'px', fontWeight }">
    {{ value }}
  </span>
</template>
<script setup lang="ts">
  import { ref, computed, watchEffect, unref, onMounted, watch } from 'vue'
  import { useTransition, TransitionPresets } from '@vueuse/core'
  import { getType } from '@/utils'

  const props = defineProps({
    startVal: { type: Number, default: 0 },
    endVal: { type: Number, default: 2023 },
    duration: { type: Number, default: 1500 },
    autoplay: { type: Boolean, default: true },
    fontSize: { type: Number, default: 16 },
    fontWeight: { type: Number, default: 400 },
    decimals: {
      type: Number,
      default: 0,
      validator(value: number) {
        return value >= 0
      }
    },
    prefix: { type: String, default: '' },
    suffix: { type: String, default: '' },
    separator: { type: String, default: ',' },
    decimal: { type: String, default: '.' },
    /**
     * font color
     */
    color: { type: String }
  })

  const emits = defineEmits(['onStarted', 'onFinished'])

  const source = ref(props.startVal)
  const disabled = ref(false)
  let outputValue = useTransition(source)

  const value = computed(() => formatNumber(unref(outputValue)))

  watchEffect(() => {
    source.value = props.startVal
  })

  watch([() => props.startVal, () => props.endVal], () => {
    if (props.autoplay) {
      start()
    }
  })

  onMounted(() => {
    props.autoplay && start()
  })

  function start() {
    run()
    source.value = props.endVal
  }

  function reset() {
    source.value = props.startVal
    run()
  }

  function run() {
    outputValue = useTransition(source, {
      disabled,
      duration: props.duration,
      onFinished: () => emits('onFinished'),
      onStarted: () => emits('onStarted'),
      ...{ transition: TransitionPresets.linear }
    })
  }

  function formatNumber(num: number | string) {
    if (!num && num !== 0) {
      return ''
    }
    const { decimals, decimal, separator, suffix, prefix } = props
    num = Number(num).toFixed(decimals)
    num += ''

    const x = num.split('.')
    let x1 = x[0]
    const x2 = x.length > 1 ? decimal + x[1] : ''

    const rgx = /(\d+)(\d{3})/
    if (separator && getType(separator) !== 'number') {
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + separator + '$2')
      }
    }
    return prefix + x1 + x2 + suffix
  }
  defineOptions({
    name: 'CountTo'
  })
</script>
