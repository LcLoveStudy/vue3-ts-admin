<template>
  <el-menu
    class="bg-white dark:bg-dark-primary"
    :collapse="asideMenuFold"
    router
    :default-active="currentRoute"
  >
    <!-- 从这里开始循环菜单 -->
    <template v-for="menu in routes" :key="menu.path">
      <!-- 这里开始时只有一级菜单 -->
      <el-menu-item
        v-if="
          !menu.meta.hideMenu && menu.meta.hideChildrenInMenu && hasRole(userType, menu.meta.role)
        "
        :index="menu.path"
      >
        <el-icon class="tablet:text-base" :icon="menu.meta.icon">
          <template v-if="menu.meta.icon">
            <component :is="menu.meta.icon" />
          </template>
          <!-- 动态渲染icon -->
        </el-icon>
        <span class="phone:text-5xl tablet:text-base">{{ menu.meta.title }}</span>
      </el-menu-item>
      <!-- 这里开始是有子菜单的 -->
      <template v-else-if="!menu.meta.hideMenu && hasRole(userType, menu.meta.role)">
        <el-sub-menu :index="menu.path">
          <template #title>
            <el-icon class="phone:text-5xl tablet:text-base">
              <template v-if="menu.meta.icon">
                <component :is="menu.meta.icon" />
              </template>
            </el-icon>
            <span class="phone:text-5xl tablet:text-base">{{ menu.meta.title }}</span>
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
              <span class="phone:text-5xl tablet:text-base">
                {{ twoMenu.meta.title }}
              </span>
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
                  <span class="phone:text-5xl tablet:text-base">{{ twoMenu.meta.title }}</span>
                </template>
                <!-- 三级菜单 -->
                <template v-for="treeMenu in twoMenu.children" :key="treeMenu.path">
                  <el-menu-item
                    v-if="!treeMenu.meta.hideMenu && hasRole(userType, treeMenu.meta.role)"
                    :index="treeMenu.path"
                  >
                    <el-tooltip effect="dark" :content="treeMenu.meta.title" placement="right">
                      <div class="truncate phone:text-5xl tablet:text-base">
                        {{ treeMenu.meta.title }}
                      </div>
                    </el-tooltip>
                  </el-menu-item>
                </template>
              </el-sub-menu>
            </template>
          </template>
        </el-sub-menu>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
  import { routes } from '@/router/index'
  import { hasRole } from '@/utils'
  import { useUserStore, useCustomStore } from '@/stores'
  import { storeToRefs } from 'pinia'
  const { asideMenuFold } = storeToRefs(useCustomStore())
  const { userinfo } = useUserStore()
  const userType = userinfo?.userType ? userinfo.userType : 'admin'
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
