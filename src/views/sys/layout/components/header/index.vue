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
    <div class="flex items-center mr-6">
      <!-- 切换菜单位置 -->
      <el-switch
        class="mr-6"
        v-model="changeMenu"
        inline-prompt
        active-text="头部菜单"
        inactive-text="侧边菜单"
        @change="menuChange"
      />
      <!-- 全屏 -->
      <el-icon class="mr-6 cursor-pointer" @click="useDocumentFullScreen"><FullScreen /></el-icon>
      <!-- 下拉框 -->
      <username-dropdown />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDocumentFullScreen } from '@/hooks'
  import topMenu from './components/top-menu'
  import SsBreadcrumb from '@/components/ss-breadcrumb'
  import UsernameDropdown from './components/username-dropdown.vue'
  import { useLayoutStore } from '@/stores/modules/layout'
  const { getMenuPosition, setMenuPosition } = useLayoutStore()
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
  }
</style>
