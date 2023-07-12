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
    <topMenu v-if="props.menuOnTop" />
    <div class="header_right">
      <!-- 用户头像 -->
      <el-dropdown class="avator">
        <el-avatar :size="40" fit="cover" />
        <!-- 鼠标放在头像上的下拉框部分 -->
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登陆</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import topMenu from '@/components/topMenu/index.vue'
import BreadCrumb from '@/components/breadCrumb/breadCrumb.vue';
import { useRouter } from 'vue-router'
const router = useRouter()
const props = defineProps({
  //菜单栏的展开和折叠
  isCollapse: {
    default: false,
    tyle: Boolean
  },
  menuOnTop: {
    default: false,
    tyle: Boolean
  }
})
const emits = defineEmits(['update:isCollapse'])
/**
 * 点击图标后，通过自定义事件，更新折叠状态
 */
const foldMenu = () => {
  emits('update:isCollapse', !props.isCollapse)
}

//点击退出登录
const logout = () => {
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
      width: 80px;
      cursor: pointer;
    }

    .avator:hover {
      background-color: var(--hover-backgroundColor);
    }
  }

}
</style>