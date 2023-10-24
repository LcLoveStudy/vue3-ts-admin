<template>
  <div>
    <el-dropdown>
      <span class="logout_btn">
        {{ userinfo?.username }}
        <el-icon color="rgb(53, 100, 208)">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="goCode">源码仓库</el-dropdown-item>
          <el-dropdown-item @click="logoutHandle">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/stores/modules/user'
  import { ElMessage } from 'element-plus'
  const { logout, userinfo } = useUserStore()
  const router = useRouter()
  /** 点击去gitee仓库 */
  const goCode = () => {
    window.open('https://gitee.com/lichang666/v3-ts')
  }
  /** 点击退出登录 */
  const logoutHandle = () => {
    logout().then(() => {
      ElMessage.success('退出成功')
      router.push('/login')
    })
  }
</script>

<style scoped lang="less">
  .logout_btn {
    width: 50px;
    height: 20px;
    color: rgb(53, 100, 208);
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
  }
</style>
