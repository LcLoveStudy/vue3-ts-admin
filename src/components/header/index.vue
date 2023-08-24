<template>
  <div class="my_header">
    <div class="header_left">
      <!-- 折叠图标 -->
      <template v-if="!changeMenu">
        <el-icon class="fold_icon" @click="foldMenu">
          <Operation />
        </el-icon>
      </template>
      <!-- 面包屑导航 -->
      <ss-breadcrumb />
    </div>
    <top-menu v-if="changeMenu" />
    <div class="width-250 flex items-center mr-25">
      <!-- 切换菜单位置 -->
      <el-switch
        class="mr-25"
        v-model="changeMenu"
        inline-prompt
        active-text="头部菜单"
        inactive-text="侧边菜单"
        @change="menuChange"
      />
      <!-- 全屏 -->
      <el-icon class="mr-25 hover-pointer" @click="fullScreen"><FullScreen /></el-icon>
      <!-- 下拉框 -->
      <el-dropdown>
        <span class="logout_btn">
          {{ userinfo?.username }}
          <el-icon color="rgb(53, 100, 208)">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="goCode">源码仓库</el-dropdown-item>
            <el-dropdown-item @click="logoutHandle">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
  import topMenu from '@/components/menu/top-menu.vue'
  import SsBreadcrumb from '@/components/ss-breadcrumb'
  import { useUserStore } from '@/stores/modules/user'
  import { useLayoutStore } from '@/stores/modules/layout'
  import { ElMessage } from 'element-plus'
  const { logout, userinfo } = useUserStore()
  const { getMenuPosition, setMenuPosition } = useLayoutStore()
  const router = useRouter()
  const props = defineProps({
    // 菜单栏的展开和折叠
    isCollapse: {
      default: false,
      tyle: Boolean
    }
  })
  const emits = defineEmits(['update:isCollapse'])

  // 是否改变菜单位置
  const changeMenu = ref(getMenuPosition())
  // 改变菜单位置
  const menuChange = () => {
    setMenuPosition(changeMenu.value ? 'top' : 'aside')
  }

  /** 点击图标后，通过自定义事件，更新折叠状态 */
  const foldMenu = () => {
    emits('update:isCollapse', !props.isCollapse)
  }

  const isFullScreen = ref(false)
  // 控制全屏显示
  const fullScreen = () => {
    const element = document.documentElement
    if (isFullScreen.value) {
      try {
        document.exitFullscreen()
        isFullScreen.value = false
      } catch (e) {
        ElMessage.error('浏览器不支持全屏')
      }
    } else {
      try {
        isFullScreen.value = true
        element.requestFullscreen()
      } catch (e) {
        ElMessage.error('浏览器不支持全屏')
      }
    }
  }

  /** 点击退出登录 */
  const logoutHandle = () => {
    logout().then(() => {
      ElMessage.success('退出成功')
      router.push('/login')
    })
  }

  /** 点击去gitee仓库 */
  const goCode = () => {
    window.open('https://gitee.com/lichang666/v3-ts')
  }
</script>

<style scoped lang="less">
  .my_header {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    .header_left {
      display: flex;
      align-items: center;
      height: 100%;

      .fold_icon {
        width: 65px;
        height: 100%;
        display: flex;
        font-size: 25px;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }

      .fold_icon:hover {
        background-color: var(--hover-backgroundColor);
      }
    }

    .logout_btn {
      width: 50px;
      height: 20px;
      color: rgb(53, 100, 208);
      display: flex;
      justify-content: space-around;
      align-items: center;
      cursor: pointer;
    }
    .settings_icon {
      margin: 0 10px 0 20px;
      cursor: pointer;
      :hover {
        background-color: var(--hover-backgroundColor);
      }
    }
  }
</style>
