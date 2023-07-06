<template>
  <div id="vditor" ></div>
</template>

<script setup lang="ts">
import Vditor from "./src"
import 'vditor/dist/js/icons/ant'
import "vditor/dist/index.css"
import {onMounted,ref} from 'vue'
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
    }
  })
const emits = defineEmits(['update:value','change'])

const vditor = ref()
  onMounted(()=>{
    vditor.value = new Vditor("vditor", {
      height: props.height,
      width: props.width,
      toolbarConfig: {
        pin: false,
        hide:false,
      },
      cache: {
        enable: false
      },
      toolbar: [
        // "emoji",
        // "headings",
        "bold",
        "italic",
        "strike",
        "link",
        "|",
        "list",
        // "ordered-list",
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
        // "edit-mode",
        {
          name: "more",
          toolbar: [
            //"both",
            // "code-theme",
            // "content-theme",
            // "export",
            "outline",
            "preview",
            //"devtools",
            // "info",
            //"help",
          ],
        },
      ],
      after: () => {
        vditor.value.setValue(props.value)
      },
      input(value:string){
        emits('update:value',value)
        emits('change',value)
      },
      mode: 'wysiwyg',
      preview: {
        mode: "both",
        actions: []
      },
    })
  })
</script>

<style scoped>

</style>