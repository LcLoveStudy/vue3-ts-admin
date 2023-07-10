<template>
  <AutoForm :formData="loginForm" @submit="loginClick" submitText="确定" :submitLoading="loginLoading" labelColor="#000" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import AutoForm from '@/components/autoForm/index.vue'
//登录表单
const loginForm = ref({
  username: {
    value: '',
    label: '用户名',
    type: 'text',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [{ required: true, message: '用户名不能为空', trigger: 'blur' }]
  },
  hobby: {
    value: [],
    label: '爱好',
    type: 'checkbox',
    options: [{ label: '乒乓球', value: 'pinpang' }, { label: '画画', value: 'draw' }, { label: '打游戏', value: 'game' }, { label: '编程', value: 'code' }],
    prop: 'hobby',
    rules: [{ type: 'array', required: true, message: '请选择爱好', trigger: 'blur' }]
  },
  password: {
    value: '',
    label: '密码',
    type: 'password',
    prop: 'password',
    placeholder: '请输入密码',
    rules: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
  }
})
const loginLoading = ref(false)
//点击登录按钮
const loginClick = () => {
  loginLoading.value = true
  console.log('用户名:' + loginForm.value.username.value,
    '密码:' + loginForm.value.password.value,
    '爱好：' + loginForm.value.hobby.value)
  loginLoading.value = false
}
</script>

<style scoped></style>