<template>
  <el-skeleton :rows="5" animated :loading="initLoading">
    <div id="vditor"></div>
  </el-skeleton>
</template>

<script setup lang="ts">
import Vditor from "vditor"
import "vditor/dist/index.css"
import { onMounted, ref } from "vue";
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    required: false,
    default: '300px'
  },
  width: {
    type: String,
    required: false,
    default: "auto"
  },
  mode: {
    type: String || undefined,
    required: false,
    default: 'wysiwyg'
  },
})
const emits = defineEmits(['update:value', 'change'])
//是否加载骨架屏
const initLoading = ref(false)
//获取dom元素
const vditor = ref()

onMounted(() => {
  initLoading.value = true
  vditor.value = new Vditor("vditor", {
    height: props.height,
    width: props.width,
    toolbarConfig: {
      pin: true,
      hide: false,
    },
    cache: {
      enable: false
    },
    toolbar: [
      "emoji",
      "headings",
      "bold",
      "italic",
      "strike",
      "link",
      "|",
      "list",
      "ordered-list",
      "check",
      "outdent",
      "indent",
      "|",
      "quote",
      "line",
      "code",
      "inline-code",
      "insert-before",
      "insert-after",
      "|",
      //"upload",
      // "record",
      { //自定义上传
        hotkey: "",
        name: "upload",
        // tipPosition: "s",
        tip: "上传图片",
        className: "right",
      },

      "table",
      "|",
      "undo",
      "redo",
      "|",
      // "fullscreen",
      "edit-mode",
      {
        name: "more",
        toolbar: [
          //"both",
          "code-theme",
          "content-theme",
          "export",
          "outline",
          "preview",
          //"devtools",
          // "info",
          //"help",
        ],
      },
    ],
    input(value: string) {
      //更新绑定值
      emits('update:value', value)
      emits('change', value)
    },
    after: () => {
      vditor.value.setValue(props.value)
    },
    mode: 'wysiwyg',
    preview: {
      mode: "both",
      actions: []
    },
    upload: {
      accept: 'image/*',// 规定上传的图片格式
      url: "/api/uploadFile",// 请求的接口
      multiple: false,
      fieldName: 'file',
      max: 10 * 1024 * 1024,//上传图片的大小
      // extraData: { 'access_token': this.token }, // 为 FormData 添加额外的参数
      linkToImgUrl: "/api/admin/uploadFile",
    }
  })
  initLoading.value = false
})
</script>

<style scoped></style>