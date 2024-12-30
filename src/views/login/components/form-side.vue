<template>
  <div class="bg-[#16181c] text-white px-12">
    <div class="flex items-center gap-4 mt-16 select-none">
      <h1 class="text-5xl">欢迎回来</h1>
      <img class="w-16" :src="DogIcon" />
    </div>
    <div class="mt-6 text-xl text-slate-200 select-none">输入您的账号密码登录系统</div>
    <el-form ref="loginFormRef" :model="loginForm" :rules="rules" label-width="auto" class="mt-8">
      <el-form-item prop="username">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          placeholder="请输入密码"
          show-password
          class="mt-8"
        />
      </el-form-item>
    </el-form>
    <el-button @click="loginHandler" :loading="loginLoading" class="w-full mt-8" type="primary">
      登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
  import DogIcon from '@/assets/images/login/dog.png'
  import { useUserStore } from '@/stores/modules/user'
  import type { FormInstance, FormRules } from 'element-plus'
  const router = useRouter()
  const { login } = useUserStore()
  const loginFormRef = ref<FormInstance>()
  const loginForm = reactive({
    username: '',
    password: ''
  })

  const loginLoading = ref(false)

  const rules = reactive<FormRules>({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  })

  /** 点击登录按钮 */
  const loginHandler = () => {
    if (!loginFormRef.value) return
    loginFormRef.value.validate(async (valid, fields) => {
      if (valid) {
        const { username, password } = loginForm
        loginLoading.value = true
        await login({ username, password })
          .then(() => {
            router.push('/')
          })
          .catch(() => {
            loginForm.password = ''
            loginForm.username = ''
          })
          .finally(() => {
            loginLoading.value = false
          })
      }
    })
  }
</script>

<style lang="less" scoped>
  :deep(.el-input__wrapper) {
    background: transparent;
    box-shadow: 0 0 0 1px #334155 inset;
    padding: 8px 16px;
    border-radius: 8px;
  }
  :deep(.el-input__inner) {
    color: white;
    font-size: 1.5rem;
  }
  :deep(.el-form-item__error) {
    margin-top: 7px;
    user-select: none;
  }
</style>
