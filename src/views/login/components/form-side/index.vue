<template>
  <div class="dark:bg-[#16181c] dark:text-white tablet:px-12 phone:px-[5vw] phone:pt-6">
    <div class="tablet:float-none phone:float-right flex items-center justify-end">
      <div
        class="phone:px-[16px] phone:py-[8px] tablet:mt-0 phone:mt-[4vh] tablet:px-8 tablet:py-4 rounded-full flex items-center bg-slate-100 dark:bg-dark-primary"
      >
        <theme-checkout />
      </div>
    </div>
    <div class="flex items-center gap-4 tablet:mt-8 phone:mt-[4vh] select-none">
      <h1 class="tablet:text-5xl phone:text-[24px]">欢迎回来</h1>
      <img class="tablet:w-16 phone:w-[36px]" :src="DogIcon" />
    </div>
    <div class="mt-6 tablet:text-xl phone:text-[14px] dark:text-slate-200 select-none">
      输入您的账号密码登录系统
    </div>
    <login-form />
  </div>
</template>

<script setup lang="ts">
  import DogIcon from '@/assets/images/login/dog.png'
  import { LoginForm, ThemeCheckout } from './components'
</script>
