<template>
  <div class="login_page">
    <div
      class="absolute lg:top-[15rem] lg:right-[18rem] lg:py-8 lg:px-16 bg-[rgba(255,255,255,0.4)] rounded"
    >
      <div class="flex items-center">
        <div class="lg:text-3xl font-medium">欢迎登录</div>
        <div class="lg:text-2xl lg:ml-[1.25rem] text-[#999]">
          {{ ConstEnums.PROJECT_NAME }}
        </div>
      </div>
      <div class="h-[5px] lg:w-[5.6rem] bg-[#579FF8] rounded ml-[12px]"></div>
      <div class="lg:mt-8">
        <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="0">
          <el-form-item prop="username">
            <el-input
              class="lg:h-10"
              v-model="form.username"
              size="large"
              placeholder="请输入用户名"
            >
              <template #prefix>
                <el-icon size="20"><UserFilled /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              class="lg:h-10 lg:mt-2"
              v-model="form.password"
              type="password"
              size="large"
              placeholder="请输入密码"
            >
              <template #prefix>
                <el-icon size="20"><Lock /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="lg:h-8 lg:mt-2"
              type="primary"
              :loading="loginLoading"
              style="width: 100%"
              @click="loginHandler"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { Lock } from '@element-plus/icons-vue'
  import { ConstEnums } from '@/enums/const-enums'
  import { useUserStore } from '@/stores/modules/user'
  import type { FormInstance, FormRules } from 'element-plus'
  const { login } = useUserStore()
  const router = useRouter()
  /** 登录表单 */
  const ruleFormRef = ref<FormInstance>()
  const form = ref({
    username: '',
    password: ''
  })
  const rules = reactive<FormRules<{ username: string; password: string }>>({
    username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
    password: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
  })

  const loginLoading = ref(false)
  /** 点击登录按钮 */
  const loginHandler = () => {
    if (!ruleFormRef.value) return
    ruleFormRef.value.validate(async (valid, fields) => {
      if (valid) {
        const { username, password } = form.value
        loginLoading.value = true
        await login({ username, password })
          .then(() => {
            router.push('/')
          })
          .catch(() => {
            form.value.password = ''
            form.value.username = ''
          })
          .finally(() => {
            loginLoading.value = false
          })
      } else {
        console.log('error submit!', fields)
      }
    })
  }
</script>

<style scoped lang="less">
  .login_page {
    width: 100%;
    height: 100%;
    position: relative;
    background: url('@/assets/images/login.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  :deep(.el-icon svg) {
    font-size: 24px;
  }
</style>
