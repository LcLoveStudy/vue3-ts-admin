<template>
  <div class="width-400">
    <el-form label-position="right" label-width="80px">
      <el-form-item v-for="item in props.formData" :key="item.label" :label="item.label">
        <el-input v-model="item.value" :placeholder="item.placeholder" :type="item?.type"
          :show-password="item.type == 'password'" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitClick" class="width-200 mt-20" :loading="submitLoading">
          {{ props.submitText }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  formData: {
    type: Object,
    default: {
      username: {
        value: '',
        label: '用户名',
        type: '',
        placeholder: '请输入用户名'
      },
      password: {
        value: '',
        label: '密码',
        type: 'password',
        placeholder: '请输入密码'
      }
    }
  },
  //提交按钮的文字提示
  submitText:{
    type: String,
    default: '登录'
  },
  // 提交按钮的loading
  submitLoading:{
    type: Boolean,
    default: false
  },
  //标签的字体颜色
  labelColor: {
    type: String,
    default: '#000'
  }
})

const emits = defineEmits(['submit'])

//表单的提交
const submitClick = () => {
  emits('submit')
}
</script>

<style scoped lang="less">
:deep(.el-form-item__label) {
  font-size: 16px;
  color: v-bind(labelColor);
}
</style>