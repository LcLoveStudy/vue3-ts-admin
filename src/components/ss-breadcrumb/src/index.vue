<template>
  <div class="my_breadcrumb">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="route in breadCrumbs" :key="route.path">
        <template v-if="route.children.length === 0">
          {{ route.title }}
        </template>
        <template v-else>
          <el-dropdown>
            <div class="hover-pointer">
              {{ route.title }}
              <el-icon>
                <arrow-down />
              </el-icon>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item
                  v-for="item in route.children"
                  :key="item.name"
                  @click="router.push(item.path)"
                >
                  {{ item.meta.title }}
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
  import { routes } from '@/router/index'
  const route = useRoute()
  const router = useRouter()
  defineOptions({
    name: 'SsBreadcrumb'
  })

  interface BreadCrumbsType {
    title: string
    path: string
    children: RouterType[]
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
            path: item.path,
            children: item.children
          })
        }
      })
      newValue.matched.forEach((item) => {
        if (item.path.split('/')[1] === moduleName) {
          if (!item.meta.hideBreadcrumb) {
            breadCrumbs.value.push({
              title: item.meta.title as string,
              path: item.path,
              children: item.children as RouterType[]
            })
          }
        }
      })
      console.log(breadCrumbs.value)
    },
    { immediate: true, deep: true }
  )
</script>
