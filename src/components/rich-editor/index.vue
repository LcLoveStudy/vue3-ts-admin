<template>
  <div style="border: 1px solid #ccc" :style="{ width: props.width }">
    <Toolbar
      style="border-bottom: 1px solid #ccc"
      :editor="editorRef"
      :defaultConfig="toolbarConfig"
      mode="default"
    />
    <Editor
      :style="{ height: props.heigth }"
      v-model="valueHtml"
      @onChange="handleChange"
      :defaultConfig="editorConfig"
      mode="default"
      @onCreated="handleCreated"
    />
  </div>
</template>

<script setup lang="ts">
  import '@wangeditor/editor/dist/css/style.css' // 引入 css
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
  defineOptions({
    name: 'RichEditor'
  })
  const props = defineProps({
    value: {
      type: String,
      default: ''
    },
    heigth: {
      type: String,
      default: '300px'
    },
    width: {
      type: String,
      default: ''
    }
  })
  const emits = defineEmits(['update:value', 'change'])
  // 获取实例
  const editorRef = shallowRef()
  // 内容 HTML
  const valueHtml = ref(props.value)
  // 工具栏
  const toolbarConfig = {}
  const editorConfig = { placeholder: '请输入内容...' }

  // 内容改变时，获取当前的html内容并更新父组件传递来的参数
  const handleChange = (editor: { getHtml: () => string }) => {
    emits('update:value', editor.getHtml())
    emits('change', editor.getHtml())
  }

  // 组件销毁时，也及时销毁编辑器
  onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
  })
  // 记录 editor 实例，重要！
  const handleCreated = (editor: any) => {
    editorRef.value = editor
  }
</script>
