<template>
  <AutoForm :formData="loginForm" @submit="loginClick" submitText="确定" :submitLoading="loginLoading" labelColor="#000" />
  <RichEditor v-model:value="code" heigth="40vh" class="mt-20" @change="codeChange" />
</template>

<script setup lang="ts">
import RichEditor from '@/components/richEditor/index.vue'
import { ref } from 'vue';
import AutoForm from '@/components/autoForm/index.vue'
//登录表单
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
    options: [{ label: '男', value: 'man' }, { label: '女', value: 'woman' }],
    prop: 'sex',
    rules: [{ required: true, message: '请选择性别', trigger: 'change' }]
  },
  place: {
    value: '',
    label: '所在地',
    type: 'select',
    options: [{ label: '安徽', value: 'anhui' }, { label: '江苏', value: 'jiangsu' }],
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
  console.log('用户名:' + loginForm.value.username.value,
    '密码:' + loginForm.value.password.value,
    '爱好：' + loginForm.value.hobby.value)
  loginLoading.value = false
}

/** 源码 */
const code = ref(`<p><span style="font-size: 12px;">//登录表单</span></p><p><span style="font-size: 12px;">const loginForm = ref({</span></p><p><span style="font-size: 12px;"> &nbsp;username: {</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;value: '',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;label: '用户名',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;type: 'text',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;prop: 'username',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;placeholder: '请输入用户名',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;rules: [{ required: true, message: '用户名不能为空', trigger: 'blur' }]</span></p><p><span style="font-size: 12px;"> &nbsp;},</span></p><p><span style="font-size: 12px;"> &nbsp;hobby: {</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;value: [],</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;label: '爱好',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;type: 'checkbox',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;options: [</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp; &nbsp;{ label: '乒乓球', value: 'pinpang' },</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp; &nbsp;{ label: '画画', value: 'draw' },</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp; &nbsp;{ label: '打游戏', value: 'game' },</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp; &nbsp;{ label: '编程', value: 'code' }</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;],</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;prop: 'hobby',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;rules: [{ type: 'array', required: true, message: '请选择爱好', trigger: 'change' }]</span></p><p><span style="font-size: 12px;"> &nbsp;},</span></p><p><span style="font-size: 12px;"> &nbsp;password: {</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;value: '',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;label: '密码',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;type: 'password',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;prop: 'password',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;placeholder: '请输入密码',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;rules: [{ required: true, message: '密码不能为空', trigger: 'blur' }]</span></p><p><span style="font-size: 12px;"> &nbsp;},</span></p><p><span style="font-size: 12px;"> &nbsp;sex: {</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;value: '',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;label: '性别',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;type: 'radio',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;options: [{ label: '男', value: 'man' }, { label: '女', value: 'woman' }],</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;prop: 'sex',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;rules: [{ required: true, message: '请选择性别', trigger: 'change' }]</span></p><p><span style="font-size: 12px;"> &nbsp;},</span></p><p><span style="font-size: 12px;"> &nbsp;place: {</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;value: '',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;label: '所在地',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;type: 'select',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;options: [{ label: '安徽', value: 'anhui' }, { label: '江苏', value: 'jiangsu' }],</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;prop: 'place',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;placeholder: '请选择当前所在地区'</span></p><p><span style="font-size: 12px;"> &nbsp;},</span></p><p><span style="font-size: 12px;"> &nbsp;birthday: {</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;value: '',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;label: '生日',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;type: 'date',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;prop: 'birthday',</span></p><p><span style="font-size: 12px;"> &nbsp; &nbsp;placeholder: '请选择日期'</span></p><p><span style="font-size: 12px;"> &nbsp;}</span></p><p><span style="font-size: 12px;">})</span></p>`)
const codeChange = () => {
  console.log(code.value)
}
</script>

<style scoped></style>