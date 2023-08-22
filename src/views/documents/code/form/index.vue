<template>
  <ss-form
    :formData="loginForm"
    @submit="loginClick"
    submitText="确定"
    :submitLoading="loginLoading"
    labelColor="#000"
  />
  <FromCode />
  <h2 class="mb-20">组件参数说明</h2>
  <HowToUseTable :howToUse="howUse" />
  <h2 class="mb-20">FormData参数说明</h2>
  <HowToUseTable :howToUse="formDataUse" />
</template>

<script setup lang="ts">
  import SsForm from '@/components/ss-form'
  import FromCode from './code.vue'
  import HowToUseTable from '../../components/how-to-use-table.vue'
  // 登录表单
  const loginForm = ref({
    username: {
      value: '',
      label: '用户名',
      type: 'text',
      prop: 'username',
      placeholder: '请输入用户名',
      rules: [{ required: true, message: '用户名不能为空', trigger: 'blur' }]
    },
    hobby: {
      value: [],
      label: '爱好',
      type: 'checkbox',
      options: [
        { label: '乒乓球', value: 'pinpang' },
        { label: '画画', value: 'draw' },
        { label: '打游戏', value: 'game' },
        { label: '编程', value: 'code' }
      ],
      prop: 'hobby',
      rules: [{ type: 'array', required: true, message: '请选择爱好', trigger: 'change' }]
    },
    password: {
      value: '',
      label: '密码',
      type: 'password',
      prop: 'password',
      placeholder: '请输入密码',
      rules: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
    },
    sex: {
      value: '',
      label: '性别',
      type: 'radio',
      options: [
        { label: '男', value: 'man' },
        { label: '女', value: 'woman' }
      ],
      prop: 'sex',
      rules: [{ required: true, message: '请选择性别', trigger: 'change' }]
    },
    place: {
      value: '',
      label: '所在地',
      type: 'select',
      options: [
        { label: '安徽', value: 'anhui' },
        { label: '江苏', value: 'jiangsu' }
      ],
      prop: 'place',
      placeholder: '请选择当前所在地区'
    },
    birthday: {
      value: '',
      label: '生日',
      type: 'date',
      prop: 'birthday',
      placeholder: '请选择日期'
    }
  })
  /** 登录表单的加载状态 */
  const loginLoading = ref(false)
  /** 点击登录按钮后的函数 */
  const loginClick = () => {
    loginLoading.value = true
    console.log(
      '用户名:' + loginForm.value.username.value,
      '密码:' + loginForm.value.password.value,
      '爱好：' + loginForm.value.hobby.value
    )
    loginLoading.value = false
  }

  const howUse = [
    {
      propName: 'formData',
      mean: '表单内容',
      type: 'object,具体配置查看下表',
      default: '-'
    },
    {
      propName: 'submitText',
      mean: '提交文本的文字',
      type: 'String',
      default: '确定'
    },
    {
      propName: 'submitLoading',
      mean: '提交按钮的loading',
      type: 'Boolean',
      default: 'false'
    },
    {
      propName: 'labelColor',
      mean: '标签的字体颜色',
      type: 'String',
      default: '#000'
    },
    {
      propName: '@submit',
      mean: '点击确认按钮的回调',
      type: 'Function',
      default: '-'
    }
  ]

  const formDataUse = [
    {
      propName: 'value',
      mean: '此项绑定的值(必填)',
      type: 'any',
      default: '-'
    },
    {
      propName: 'label(必填)',
      mean: 'label的文字',
      type: 'string',
      default: '-'
    },
    {
      propName: 'prop(必填)',
      mean: '此项对应在对象中的key值',
      type: 'string',
      default: '-'
    },
    {
      propName: 'type',
      mean: '此项是什么类型',
      type: 'checkbox|radio|select|date|password|text(默认为text)',
      default: '-'
    },
    {
      propName: 'placeholder(type为checkbox|radio无效)',
      mean: '占位符',
      type: 'string',
      default: '-'
    },
    {
      propName: 'options(type为password|text|date无效)',
      mean: '选项',
      type: 'array',
      default: '-'
    },
    {
      propName: 'rules',
      mean: '校验规则',
      type: 'array(具体写法查看element-plus)',
      default: '-'
    }
  ]
</script>

<style scoped lang="less"></style>
