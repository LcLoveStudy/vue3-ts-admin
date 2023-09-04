<template>
  <div class="menu_container height-full overflow-y-auto">
    <el-menu
      class="aside_menu"
      :collapse="props.isCollapse"
      router
      text-color="var(--theme-color)"
      :default-active="currentRoute"
    >
      <!-- 从这里开始循环菜单 -->
      <template v-for="menu in routes" :key="menu.routePath">
        <!-- 这里开始时只有一级菜单 -->
        <el-menu-item
          v-if="
            !menu.meta.hideMenu && menu.meta.hideChildrenInMenu && hasRole(userType, menu.meta.role)
          "
          :index="menu.path"
        >
          <el-icon :icon="menu.meta.icon">
            <template v-if="menu.meta.icon">
              <component :is="menu.meta.icon" />
            </template>
            <!-- 动态渲染icon -->
          </el-icon>
          <span>{{ menu.meta.title }}</span>
        </el-menu-item>
        <!-- 这里开始是有子菜单的 -->
        <template v-else-if="!menu.meta.hideMenu && hasRole(userType, menu.meta.role)">
          <el-sub-menu :index="menu.path">
            <template #title>
              <el-icon class="icon">
                <template v-if="menu.meta.icon">
                  <component :is="menu.meta.icon" />
                </template>
              </el-icon>
              <span>{{ menu.meta.title }}</span>
            </template>
            <template v-for="twoMenu in menu.children" :key="twoMenu.path">
              <!-- 这里开始是没有三级菜单的二级菜单 -->
              <el-menu-item
                v-if="
                  !twoMenu.meta.hideMenu &&
                  twoMenu.meta.hideChildrenInMenu &&
                  hasRole(userType, twoMenu.meta.role)
                "
                :index="twoMenu.path"
              >
                {{ twoMenu.meta.title }}
              </el-menu-item>
              <!-- 这里开始是有三级菜单的二级菜单 -->
              <template
                v-else-if="
                  !twoMenu.meta.hideMenu &&
                  !twoMenu.meta.hideChildrenInMenu &&
                  hasRole(userType, twoMenu.meta.role)
                "
              >
                <el-sub-menu :key="twoMenu.path" :index="twoMenu.path">
                  <template #title>
                    <span>{{ twoMenu.meta.title }}</span>
                  </template>
                  <!-- 三级菜单 -->
                  <template v-for="treeMenu in twoMenu.children" :key="treeMenu.path">
                    <el-menu-item
                      v-if="!treeMenu.meta.hideMenu && hasRole(userType, treeMenu.meta.role)"
                      :index="treeMenu.path"
                    >
                      {{ treeMenu.meta.title }}
                    </el-menu-item>
                  </template>
                </el-sub-menu>
              </template>
            </template>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
  import { routes } from '@/router/index'
  import { hasRole } from '@/utils'
  import { useUserStore } from '@/stores/modules/user'
  const { userinfo } = useUserStore()
  const userType = userinfo?.user_type ? userinfo.user_type : 'admin'

  const props = defineProps({
    // 菜单栏的展开和折叠
    isCollapse: {
      default: false,
      type: Boolean
    }
  })
  const route = useRoute()

  // 当前路由，绑定菜单的default-active属性
  const currentRoute = ref('')
  // 监听路由变化，当路由改变时，改变默认选项，防止页面刷新丢失菜单高亮
  watch(
    () => route,
    (newValue) => {
      currentRoute.value = newValue.path
    },
    { immediate: true, deep: true }
  )
</script>

<style scoped lang="less">
  .aside_menu {
    height: 100%;
    font-weight: 700;
    background-color: var(--container-bgc);
  }
  .menu_container {
    &::-webkit-scrollbar {
      width: 0px;
    }
  }
  //折叠起来页不会改变宽度
  .aside_menu:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
