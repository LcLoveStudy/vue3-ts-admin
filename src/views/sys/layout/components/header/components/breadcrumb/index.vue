<template>
  <div class="flex items-center text-base text-[#666] ml-4">
    <template v-for="item in breadCrumbs" :key="item.path">
      <div class="flex items-center">
        <el-icon class="mr-2" :icon="item.icon" v-if="item.icon !== ''">
          <component :is="item.icon" />
          <!-- 动态渲染icon -->
        </el-icon>
        <span :class="[{ 'text-[#333]': item === breadCrumbs[breadCrumbs.length - 1] }]">
          {{ item.name }}
        </span>
      </div>
      <el-icon v-if="item !== breadCrumbs[breadCrumbs.length - 1]" class="mx-2">
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
