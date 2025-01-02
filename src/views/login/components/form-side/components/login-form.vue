<template>
  <el-form ref="loginFormRef" :model="loginForm" :rules="rules" class="tablet:mt-8 phone:mt-[3vh]">
    <el-form-item prop="username">
      <div class="dark:bg-dark-primary mt-8 w-full">
        <el-input v-model="loginForm.username" placeholder="请输入用户名" />
      </div>
    </el-form-item>
    <el-form-item prop="password">
      <div class="dark:bg-dark-primary mt-8 w-full">
        <el-input v-model="loginForm.password" placeholder="请输入密码" show-password />
      </div>
    </el-form-item>
    <el-form-item prop="status">
      <div class="bg-dark-primary mt-8 w-full">
        <slider-verify v-model:status="loginForm.status" width="100%" />
      </div>
    </el-form-item>
  </el-form>
  <el-button @click="loginHandler" :loading="loginLoading" class="w-full mt-8" type="primary">
    登录
  </el-button>
</template>

<script setup lang="ts">
  import SliderVerify from '@/components/slider-verify'
  import { useUserStore } from '@/stores'
  import type { FormInstance, FormRules } from 'element-plus'
  const router = useRouter()
  const { login } = useUserStore()
  const loginFormRef = ref<FormInstance>()
  const loginForm = reactive({
    username: 'admin',
    password: 'admin',
    status: false
  })

  const loginLoading = ref(false)
  const rules = reactive<FormRules>({
    username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    status: [
      {
        validator: (_rule: any, value: any, callback: any) => {
          if (!value) {
            callback(new Error('请拖动滑块验证'))
          } else {
            callback()
          }
        }
      }
    ]
  })

  /** 点击登录按钮 */
  const loginHandler = () => {
    if (!loginFormRef.value) return
    loginFormRef.value.validate(async (valid) => {
      if (valid) {
        const { username, password } = loginForm
        loginLoading.value = true
        await login({ username, password })
          .then(() => {
            router.push('/')
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
  }
  :deep(.el-form-item__error) {
    margin-top: 7px;
    user-select: none;
  }
</style>
