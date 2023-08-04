<template>
  <div class="login_page">
    <div class="login_box flex items-center justify-center">
      <AutoForm :formData="loginForm" @submit="loginClick" submitText="登录" :submitLoading="loginLoading"
        labelColor="#000" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AutoForm from '@/components/auto-form/index.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
/** 登录表单 */
const loginForm = ref({
  username: {
    value: '',
    label: '用户名',
    prop: 'username',
    placeholder: '请输入用户名',
    rules: [{ required: true, message: '用户名不能为空', trigger: 'blur' }]
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

/** 表单loading */
const loginLoading = ref(false)
/** 点击登录按钮 */
const loginClick = () => {
  let { username, password } = loginForm.value
  loginLoading.value = true
  console.log('用户名:' + username.value, '密码:' + password.value)
  loginLoading.value = false
  router.push('/')
}

</script>

<style scoped lang="less">
.login_page {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .login_box {
    width: 600px;
    height: 400px;
    background-color: pink;
    border-radius: 15px;
    overflow: hidden;
  }
}
</style>