<template>
  <div class="my_breadcrumb">
    <el-breadcrumb>
      <el-breadcrumb-item v-for="route in breadCrumbs" :key="route.path">
        <template v-if="route.children.length === 0">
          {{ route.title }}
        </template>
        <template v-else>
          <el-dropdown>
            <div class="dropdown_item">
              {{ route.title }}
              <el-icon class="icon_down">
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
  /**
   * 创建面包屑导航
   * @param {RouterType[]} RouteList 当前路由的子路由表
   * @param {string[]} targetNameList 要查找的名称
   */
  const findRoute = (RouteList: RouterType[], targetNameList: string[]) => {
    if (targetNameList.length === 0) return
    targetNameList.forEach((item) => {
      RouteList.forEach((routeItem) => {
        if (routeItem.path.split('/').at(-1) === item && !routeItem.meta.hideBreadcrumb) {
          breadCrumbs.value.push({
            title: routeItem.meta.title,
            path: routeItem.path,
            children: routeItem.children.filter((r) => !r.meta.hideBreadcrumb)
          })
          findRoute(
            routeItem.children,
            targetNameList.filter((target) => target !== item)
          )
        }
      })
    })
  }
  // 监听路由变化，当路由改变时，切割路由形成面包屑
  watch(
    () => route,
    (newValue) => {
      breadCrumbs.value = []
      // 当前路由切割生成的数组
      const moduleList = newValue.path.split('/').filter((item) => item !== '')
      const currentModule = routes.filter((item) => item.path === '/' + moduleList[0])[0]
      breadCrumbs.value.push({
        title: currentModule.meta.title,
        path: currentModule.path,
        children: currentModule.children.filter((r) => !r.meta.hideBreadcrumb)
      })
      findRoute(currentModule.children, moduleList)
    },
    { immediate: true, deep: true }
  )
</script>
