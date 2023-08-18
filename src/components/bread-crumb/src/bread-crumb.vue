<template>
  <div class="my_breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item v-for="route in breadCrumbs" :key="route.path">
        {{ route.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
  import { ArrowRight } from '@element-plus/icons-vue'
  import { routes } from '@/router/index'
  const route = useRoute()

  interface BreadCrumbsType {
    title: string
    path: string
  }
  // 用于渲染面包屑导航的数组
  const breadCrumbs = ref<Array<BreadCrumbsType>>([])

  // 监听路由变化，当路由改变时，切割路由形成面包屑
  watch(
    () => route,
    (newValue) => {
      breadCrumbs.value = []
      const moduleName: string = newValue.path.split('/')[1]
      routes.forEach((item) => {
        if (item.name === moduleName && !item.meta.hideChildrenInMenu) {
          breadCrumbs.value.push({
            title: item.meta.title as string,
            path: item.path
          })
        }
      })
      newValue.matched.forEach((item) => {
        if (item.path.split('/')[1] === moduleName) {
          if (!item.meta.hideBreadcrumb) {
            breadCrumbs.value.push({
              title: item.meta.title as string,
              path: item.path
            })
          }
        }
      })
    },
    { immediate: true, deep: true }
  )
</script>

<style scoped lang="less"></style>
