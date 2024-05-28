<template>
  <div class="login_page">
    <div class="login_box flex items-center justify-center">
      <div class="login_box">
        <span class="login_title">{{ ConstEnums.PROJECT_NAME }}</span>
        <div class="login_content">
          <el-form ref="ruleFormRef" :model="form" :rules="rules" label-width="100px">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="form.username" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input v-model="form.password" type="password" />
            </el-form-item>
            <el-form-item>
              <el-button
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
  </div>
</template>

<script setup lang="ts">
  import { ConstEnums } from '@/enums/const-enums'
  import { useKeyboardEvt } from '@/hooks'
  import { useUserStore } from '@/stores/modules/user'
  import { type FormInstance, type FormRules } from 'element-plus'
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
  useKeyboardEvt(13, loginHandler)
</script>

<style scoped lang="less">
  .login_page {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    .login_box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      z-index: 999;
      width: 500px;
      background-color: #ffffff1a;
      backdrop-filter: blur(3px); //毛玻璃属性
      border-radius: 15px;
      overflow: hidden;
      .login_title {
        margin: 20px 0;
        font-size: 30px;
        font-weight: 700;
        background: linear-gradient(180deg, #ffffff 0%, #0e9ae9 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .login_content {
        width: 80%;
      }
    }
  }
  :deep(.el-form .el-form-item__label) {
    font-size: 16px;
    color: #fff;
  }
</style>
