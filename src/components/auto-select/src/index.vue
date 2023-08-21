<template>
  <el-select
    v-model="selectValue"
    :placeholder="placeholder"
    :disabled="disabled"
    :multiple="multiple"
    collapse-tags
    collapse-tags-tooltip
    :max-collapse-tags="props.maxCollapseTags"
    @change="selectChange"
    :style="{ width: props.width }"
  >
    <el-option
      v-for="item in selectOptions"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item?.disabled"
    />
  </el-select>
</template>

<script setup lang="ts">
  import { type SelectOptionType, type SelectValue } from './auto-select'
  defineOptions({
    name: 'AutoSelect'
  })
  const props = defineProps({
    // 当前值
    value: {
      required: true,
      type: [String, Number, Array]
    },
    // 选项
    options: {
      default: () => {
        return []
      },
      required: true,
      type: Array as PropType<SelectOptionType[]>
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    // 是否允许多选
    multiple: {
      type: Boolean,
      default: false
    },
    // 多选时超过多少个就不显示了
    maxCollapseTags: {
      type: Number,
      default: 4
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '200px'
    }
  })
  const emits = defineEmits<{
    (evt: 'update:value', value: SelectValue): void
    (evt: 'change', value: SelectValue): void
  }>()
  const selectValue = ref<SelectValue>(props.value as SelectValue)
  const selectOptions = ref<SelectOptionType[]>([])

  /** 每次dom更新都获取一下最新的选项 */
  onUpdated(() => {
    selectOptions.value = props.options
  })

  /**
   * 下拉框值发生改变时
   * 1.更新value
   * 2.触发change事件
   */
  const selectChange = () => {
    emits('update:value', selectValue.value)
    emits('change', selectValue.value)
  }
</script>
