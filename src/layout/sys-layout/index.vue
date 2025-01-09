<template>
  <div class="w-full h-full flex">
    <div class="h-full w-auto">
      <slot name="aside"></slot>
    </div>
    <div class="flex-1 h-full">
      <div class="h-[7vh] bg-white dark:bg-dark-primary">
        <slot name="header"></slot>
      </div>
      <div class="desktop:p-6 bg-[--container-main-bgc] h-[93vh]">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
