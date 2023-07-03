<template>
  <div>
    <el-menu class="aside_menu" :collapse="isCollapse" router text-color="var(--theme-color)"
      :default-active="currentRoute">
      <!-- 从这里开始循环菜单 -->
      <template v-for="menu in routes" :key="menu.routePath">
        <!-- 这里开始时只有一级菜单 -->
        <el-menu-item v-if="menu.meta.hideChildrenInMenu" :index="menu.path">
          <el-icon class="icon" :icon="menu.meta.icon">
            <!-- 动态渲染icon -->
            <component :is="menu.meta.icon" />
          </el-icon>
          <span>{{ menu.meta.title }}</span>
        </el-menu-item>
        <!-- 这里开始是有子菜单的 -->
        <template v-else>
          <el-sub-menu :index="menu.path">
            <template #title>
              <el-icon class="icon">
                <component :is="menu.meta.icon" />
              </el-icon>
              <span>{{ menu.meta.title }}</span>
            </template>
            <template v-for="twoMenu in menu.children" :key="twoMenu.path">
              <!-- 这里开始是没有三级菜单的二级菜单 -->
              <el-menu-item v-if="!twoMenu.meta.hideMenu && twoMenu.meta.hideChildrenInMenu" :index="twoMenu.path">
                {{ twoMenu.meta.title }}
              </el-menu-item>
              <!-- 这里开始是有三级菜单的二级菜单 -->
              <template v-else-if="!twoMenu.meta.hideMenu && !twoMenu.meta.hideChildrenInMenu">
                <el-sub-menu :key="twoMenu.path" :index="twoMenu.path">
                  <template #title>
                    <span>{{ twoMenu.meta.title }}</span>
                  </template>
                  <!-- 三级菜单 -->
                  <template v-for="treeMenu in twoMenu.children" :key="treeMenu.path">
                    <el-menu-item v-if="!treeMenu.meta.hideMenu" :index="treeMenu.path">
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
import { useRoute } from 'vue-router';
import { routes } from '@/router/index'
import { watch, ref } from 'vue'
defineProps({
  //菜单栏的展开和折叠
  isCollapse: {
    default: false,
    type: Boolean
  }
})
const route = useRoute()

//当前路由，绑定菜单的default-active属性
const currentRoute = ref('')
//监听路由变化，当路由改变时，改变默认选项，防止页面刷新丢失菜单高亮
watch(() => route, (newValue) => {
  currentRoute.value = newValue.path
}, { immediate: true, deep: true })
</script>

<style scoped lang="less">
.aside_menu {
  height: 100%;
  font-weight: 700;
  background-color: var(--container-bgc);
}

// 消除el-menu自带边框
:deep(.el-menu) {
  border: none !important;

  //修改每一个item的高度
  .el-menu-item {
    font-size: 14px;
    height: var(--menu-item-height);
    background-color: var(--container-bgc);
  }

  // 鼠标经过每一个item
  .el-menu-item:hover {
    color: var(--menu-item-active) !important;
    background-color: var(--container-bgc);
  }

  //当前项的样式
  .el-menu-item.is-active {
    color: var(--menu-item-active) !important;
    background-color: var(--menu-item-active-bgc);
    border-right: 2px solid var(--menu-item-active);
  }

  // 二级菜单高亮显示
  .el-sub-menu.is-active>.el-sub-menu__title {
    color: var(--menu-item-active) !important;
  }

  // 二级菜单
  .el-sub-menu {

    //鼠标经过有子菜单的二级菜单时的样式
    .el-sub-menu__title:hover {
      color: var(--menu-item-active) !important;
      background-color: var(--container-bgc) !important;
    }

    // 二级标题
    .el-sub-menu__title {
      font-size: 14px;
      background-color: var(--container-bgc);
      height: var(--menu-item-height);
    }

    //二级菜单标题缩进
    .el-sub-menu .el-sub-menu__title,
    .el-menu-item {
      text-indent: 1rem;
    }
  }
}

.icon {
  font-size: 14px;
}

//折叠起来页不会改变宽度
.aside_menu:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>