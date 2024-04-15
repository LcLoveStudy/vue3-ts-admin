<template>
  <el-upload
    ref="uploadRef"
    action="#"
    :accept="props.accept"
    :limit="props.limit"
    :multiple="props.limit !== 1"
    :on-exceed="uploadHandleExceed"
    :auto-upload="false"
    :on-change="uploadChangeHanlder"
    :on-remove="uploadChangeHanlder"
  >
    <template #trigger>
      <el-button type="primary" :disabled="props.disabled">{{ props.btnTxt }}</el-button>
    </template>
  </el-upload>
</template>

<script setup lang="ts">
  import type {
    UploadFile,
    UploadFiles,
    UploadInstance,
    UploadProps,
    UploadRawFile
  } from 'element-plus'
  const props = defineProps({
    accept: {
      type: String,
      default: '*'
    },
    limit: {
      type: Number,
      default: 1
    },
    btnTxt: {
      type: String,
      default: '上传'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  })
  const emits = defineEmits(['uploadFileChange'])
  const uploadRef = ref<UploadInstance>()
  /** 超出限制 */
  const uploadHandleExceed: UploadProps['onExceed'] = (files) => {
    uploadRef.value!.clearFiles()
    const file = files[0] as UploadRawFile
    uploadRef.value!.handleStart(file)
  }
  const uploadChangeHanlder = (uploadFile: UploadFile, uploadFiles: UploadFiles) => {
    emits('uploadFileChange', uploadFiles)
  }

  defineExpose({
    clearFile: () => {
      uploadRef.value?.clearFiles()
    }
  })
</script>
