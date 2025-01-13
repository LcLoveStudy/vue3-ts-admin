<template>
  <div
    class="logout_btn phone:w-[20px] phone:h-[20px] tablet:w-[1.5rem] tablet:h-[1.5rem] cursor-pointer phone:ml-[24px] tablet:ml-[1.875rem]"
    @click="logoutClickHandler"
  ></div>
</template>

<script setup lang="ts">
  import { useUserStore } from '@/stores'
  const { logout } = useUserStore()
  const router = useRouter()
  /** 点击退出登录 */
  const logoutClickHandler = () => {
    logout()
    router.replace('/login')
  }
</script>

<style lang="less" scoped>
  .logout_btn {
    background: url('@/assets/images/logout.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    &:hover {
      filter: drop-shadow(1px 1px 1px #006cff) drop-shadow(1px 1px 1px #006cff);
    }
  }
</style>
