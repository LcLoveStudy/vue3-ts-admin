<template>
  <div class="my_header">
    <div class="header_left">
      <!-- 折叠图标 -->
      <template v-if="!props.menuOnTop">
        <el-icon class="fold_icon" @click="foldMenu">
          <Operation />
        </el-icon>
      </template>
      <!-- 面包屑导航 -->
      <BreadCrumb />
    </div>
    <topMenu v-if="props.menuOnTop" :user-type="props.userType" />
    <el-text type="primary" class="logout_btn" @click="logout">退出登陆</el-text>
  </div>
</template>

<script setup lang="ts">
  import topMenu from '@/components/menu/TopMenu.vue'
  import BreadCrumb from '@/components/bread-crumb/index.vue'
  import { useRouter } from 'vue-router'
  import { removeItem } from '@/utils'
  import { ElMessage } from 'element-plus'
  const router = useRouter()
  const props = defineProps({
    // 菜单栏的展开和折叠
    isCollapse: {
      default: false,
      tyle: Boolean
    },
    menuOnTop: {
      default: false,
      tyle: Boolean
    },
    userType: {
      default: 'admin',
      type: String
    }
  })
  const emits = defineEmits(['update:isCollapse'])

  /** 点击图标后，通过自定义事件，更新折叠状态 */
  const foldMenu = () => {
    emits('update:isCollapse', !props.isCollapse)
  }

  /** 点击退出登录 */
  const logout = () => {
    removeItem() // 清空所有localstorage
    ElMessage.success('退出成功')
    router.push('/login')
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
