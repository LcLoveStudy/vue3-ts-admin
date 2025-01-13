<template>
  <div
    class="flex items-center phone:text-5xl tablet:text-base text-[#666] dark:text-slate-300 phone:ml-[16px] tablet:ml-4"
  >
    <template v-for="item in breadCrumbs" :key="item.name">
      <div class="flex items-center">
        <el-icon class="tablet:mr-2 phone:mr-[8px]" :icon="item.icon" v-if="item.icon !== ''">
          <component :is="item.icon" />
          <!-- 动态渲染icon -->
        </el-icon>
        <span
          :class="[
            item === breadCrumbs[breadCrumbs.length - 1] ? 'text-[#333] dark:text-white' : ''
          ]"
        >
          {{ item.name }}
        </span>
      </div>
      <el-icon
        v-if="item !== breadCrumbs[breadCrumbs.length - 1]"
        class="tablet:mx-2 phone:mx-[8px]"
      >
        <ArrowRight />
      </el-icon>
    </template>
  </div>
</template>

<script setup lang="ts">
  import { routes } from '@/router/index'
  const route = useRoute()
  defineOptions({
    name: 'LcBreadcrumb'
  })
  const breadCrumbs = ref<
    {
      name: string
      icon: string
    }[]
  >([])

  const getBreadCrumbs = (parentList: RouterType[], loop: number) => {
    const currentPath = route.path
    const pathList = currentPath.split('/').filter((item) => item !== '')
    if (loop > pathList.length - 1) return
    const targetPath = '/' + pathList.slice(0, loop + 1).join('/')
    const currentRoute = parentList.find((item) => item.path === targetPath)
    if (!currentRoute) return
    if (!currentRoute.meta.hideBreadcrumb) {
      breadCrumbs.value.push({
        name: currentRoute.meta.title,
        icon: currentRoute.meta.icon || ''
      })
    }
    getBreadCrumbs(currentRoute.children, loop + 1)
  }
  watch(
    () => route.path,
    () => {
      breadCrumbs.value = []
      getBreadCrumbs(routes, 0)
    },
    {
      immediate: true
    }
  )
</script>
