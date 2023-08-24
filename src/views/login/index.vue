<template>
  <div class="login_page">
    <div class="login_box flex items-center justify-center">
      <ss-form
        :formData="loginForm"
        @submit="loginHandler"
        submitText="登录"
        :submitLoading="loginLoading"
        labelColor="#000"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useEventListener } from '@vueuse/core'
  import SsForm from '@/components/ss-form'
  import { useUserStore } from '@/stores/modules/user'
  import { ElMessage } from 'element-plus'
  const { login } = useUserStore()
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

  const loginLoading = ref(false)
  /** 点击登录按钮 */
  const loginHandler = () => {
    const { username, password } = loginForm.value
    loginLoading.value = true
    login({ username: username.value, password: password.value })
      .then(() => {
        router.push('/')
      })
      .catch(() => {
        ElMessage.error('用户名或密码错误')
      })
      .finally(() => {
        loginLoading.value = false
      })
  }
  // 回车登录
  const cleanup = useEventListener(document, 'keydown', (e) => {
    if (e.code === 'Enter') {
      loginHandler()
    }
  })
  onUnmounted(() => {
    cleanup()
  })
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
