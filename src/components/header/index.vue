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
    <topMenu v-if="changeMenu" />
    <div>
      <el-switch
        class="mr-25"
        v-model="changeMenu"
        inline-prompt
        active-text="头部菜单"
        inactive-text="侧边菜单"
        @change="menuChange"
      />
      <el-text type="primary" class="logout_btn" @click="logoutHandle">退出登陆</el-text>
    </div>
  </div>
</template>

<script setup lang="ts">
  import topMenu from '@/components/menu/TopMenu.vue'
  import SsBreadcrumb from '@/components/ss-breadcrumb'
  import { useUserStore } from '@/stores/modules/user'
  import { useLayoutStore } from '@/stores/modules/layout'
  import { ElMessage } from 'element-plus'
  const { logout } = useUserStore()
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

  /** 点击退出登录 */
  const logoutHandle = () => {
    logout().then(() => {
      ElMessage.success('退出成功')
      router.push('/login')
    })
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

    .header_right {
      height: 100%;
      display: flex;
      align-items: center;

      .avator {
        margin-left: 5%;
        margin-right: 5vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        cursor: pointer;
      }

      .avator:hover {
        background-color: var(--hover-backgroundColor);
      }
    }

    .logout_btn {
      margin-right: 50px;
      cursor: pointer;
    }
  }
</style>
