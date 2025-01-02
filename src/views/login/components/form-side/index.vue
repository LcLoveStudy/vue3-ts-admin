<template>
  <div class="bg-[#16181c] text-white tablet:px-12 phone:px-[5vw] phone:pt-6">
    <div class="flex items-center justify-end">
      <div class="px-8 py-4 rounded-full flex items-center bg-dark-primary">
        <theme-checkout class="cursor-pointer" />
      </div>
    </div>
    <div class="flex items-center gap-4 tablet:mt-8 phone:mt-[4vh] select-none">
      <h1 class="tablet:text-5xl phone:text-[24px]">欢迎回来</h1>
      <img class="tablet:w-16 phone:w-[36px]" :src="DogIcon" />
    </div>
    <div class="mt-6 tablet:text-xl phone:text-[14px] text-slate-200 select-none">
      输入您的账号密码登录系统
    </div>
    <login-form />
  </div>
</template>

<script setup lang="ts">
  import DogIcon from '@/assets/images/login/dog.png'
  import { LoginForm, ThemeCheckout } from './components'
</script>
