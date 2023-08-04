<template>
  <div class="width-400">
    <el-form
      ref="formRef"
      label-position="right"
      label-width="100px"
      :rules="createRules()"
      :model="ruleForm"
    >
      <template v-for="item in props.formData" :key="item.label">
        <el-form-item :label="item.label" :prop="item.prop">
          <!-- 多选框 -->
          <el-checkbox-group
            v-if="item?.type == 'checkbox'"
            v-model="item.value"
            @change="inputChange(item)"
          >
            <el-checkbox
              v-for="checkoption in item.options"
              :key="checkoption.value"
              :label="checkoption.value"
              :name="item.prop"
            >
              {{ checkoption.label }}
            </el-checkbox>
          </el-checkbox-group>
          <!-- 单选框 -->
          <el-radio-group
            v-else-if="item?.type == 'radio'"
            v-model="item.value"
            @change="inputChange(item)"
          >
            <el-radio
              v-for="raidoOption in item.options"
              :key="raidoOption.value"
              :label="raidoOption.value"
            >
              {{ raidoOption.label }}
            </el-radio>
          </el-radio-group>
          <!-- 下拉框 -->
          <el-select
            v-else-if="item?.type == 'select'"
            v-model="item.value"
            :placeholder="item.placeholder"
            @change="inputChange(item)"
          >
            <el-option
              v-for="selectOption in item.options"
              :key="selectOption.value"
              :label="selectOption.label"
              :value="selectOption.value"
            />
          </el-select>
          <!-- 日期选择器 -->
          <el-date-picker
            v-else-if="item?.type == 'date'"
            v-model="item.value"
            type="date"
            :placeholder="item.placeholder"
            @change="inputChange(item)"
          />
          <el-input
            v-else
            v-model="item.value"
            :placeholder="item.placeholder"
            :type="item?.type"
            @input="inputChange(item)"
            :show-password="item.type == 'password'"
          />
        </el-form-item>
      </template>
      <!-- 表单确认按钮 -->
      <el-form-item>
        <el-button
          type="primary"
          @click="submitClick(formRef)"
          class="width-200 mt-20"
          :loading="submitLoading"
        >
          {{ props.submitText }}
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
  import type { FormInstance } from 'element-plus'
  import { reactive, ref } from 'vue'
  const props = defineProps({
    formData: {
      type: Object,
      default: {
        username: {
          value: '',
          label: '用户名',
          prop: 'username',
          type: '',
          placeholder: '请输入用户名',
          rules: [{ required: true, message: '用户名不能为空', trigger: 'blur' }]
        },
        password: {
          value: '',
          label: '密码',
          prop: 'password',
          type: 'password',
          placeholder: '请输入密码',
          rules: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
        }
      }
    },
    //提交按钮的文字提示
    submitText: {
      type: String,
      default: '确定'
    },
    // 提交按钮的loading
    submitLoading: {
      type: Boolean,
      default: false
    },
    //标签的字体颜色
    labelColor: {
      type: String,
      default: '#000'
    }
  })
  //自定义事件
  const emits = defineEmits(['submit'])

  /** 表单实例 */
  const formRef = ref<FormInstance>()
  /** 代理表单，只用于参与表单验证 */
  const ruleForm = reactive<any>({})
  /** 用于创建表单验证规则 */
  const createRules = () => {
    let rules: any = []
    for (let key in props.formData) {
      rules[key] = props.formData[key]?.rules
      ruleForm[key] = ''
    }
    return rules
  }

  /** 表单输入框输入时,改变代理对象，用于表单验证 */
  const inputChange = (item: any) => {
    ruleForm[item.prop] = item.value
  }

  /** 表单的提交 */
  const submitClick = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        emits('submit')
      } else {
        return false
      }
    })
  }
</script>

<style scoped lang="less">
  :deep(.el-form-item__label) {
    font-size: 16px;
    color: v-bind(labelColor);
  }
</style>
