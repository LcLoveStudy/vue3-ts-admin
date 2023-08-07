<template>
  <el-checkbox v-model="selectAll" label="全选" size="large" />
  <AutoTable
    :tableData="tableData"
    :columnData="columnData"
    :selection="true"
    v-model:selectAll="selectAll"
    @selectChange="change"
    @tableEdit="editHandle"
    height="30vh"
  >
    <template #age="{ scope }">
      <span class="blue">{{ scope.row.age }}</span>
    </template>
    <template #option="{}">
      <el-text type="primary">做点什么</el-text>
    </template>
  </AutoTable>
  <RichEditor v-model:value="code" heigth="40vh" class="mt-20" />
</template>

<script setup lang="ts">
  import RichEditor from '@/components/rich-editor/index.vue'
  import AutoTable from '@/components/auto-table/index.vue'
  import { ref } from 'vue'
  /** 列数据配置 */
  const columnData = ref([
    {
      prop: 'name',
      label: '姓名',
      order: 1,
      editable: true,
      width: '100'
    },
    {
      prop: 'sex',
      label: '性别',
      order: 3,
      filters: [
        { text: '男', value: '男' },
        { text: '女', value: '女' }
      ],
      filterMethod: (value: string, row: any, column: any) => {
        const property = column.property
        return row[property] === value
      }
    },
    {
      prop: 'age',
      label: '年龄',
      order: 2,
      width: '',
      sortable: true
    },
    {
      prop: 'option',
      label: '操作',
      order: 4,
      width: '',
      sortable: false
    }
  ])
  /** 表格数据的数据结构 */
  interface tableType {
    id: number
    name: string
    age: number
    sex: string
  }
  /** 表单数据 */
  const tableData = ref<Array<tableType>>([
    {
      id: 1,
      name: 'lc',
      age: 34,
      sex: '男'
    },
    {
      id: 2,
      name: 'ww',
      age: 41,
      sex: '女'
    },
    {
      id: 3,
      name: 'dd',
      age: 18,
      sex: '男'
    }
  ])

  /** 是否全选 */
  const selectAll = ref(false)
  /** 改变表单的选中状态 */
  const change = (value: Array<tableType>) => {
    console.log(value)
  }

  /**
   * 编辑了表单后的回调函数
   * @param newValue 新值
   * @param propName 被修改的参数
   */
  const editHandle = (newValue: any, propName: string) => {
    tableData.value.forEach((item: any) => {
      if (item.id === newValue.id) {
        item[propName] = newValue[propName]
      }
    })
  }
  // 源码展示
  const code = ref(
    `<p style="line-height: 1;"><span style="font-size: 16px;"><strong>案例代码：</strong></span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> </span><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(78, 201, 176);">AutoTable</span><span style="color: rgb(225, 60, 57);"> :tableData="tableData" :columnData="columnData" :selection="true" v-model:selectAll="selectAll"</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> </span><span style="color: rgb(225, 60, 57);">@selectChange=</span><span style="color: rgb(255, 169, 64);">"change" </span><span style="color: rgb(225, 60, 57);">@tableEdit=</span><span style="color: rgb(212, 107, 8);">"editHandle"</span><span style="color: rgb(128, 128, 128);">&gt;</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> &nbsp; &nbsp; </span><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(86, 156, 214);">template</span><span style="color: rgb(212, 212, 212);"> </span><span style="color: rgb(255, 77, 79);">#age="{ scope }"</span><span style="color: rgb(128, 128, 128);">&gt;</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> &nbsp; &nbsp; &nbsp; &nbsp; </span><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(86, 156, 214);">span</span><span style="color: rgb(212, 212, 212);"> </span><span style="color: rgb(156, 220, 254);">class</span><span style="color: rgb(212, 212, 212);">=</span><span style="color: rgb(206, 145, 120);">"blue"</span><span style="color: rgb(128, 128, 128);">&gt;</span><span style="color: rgb(225, 60, 57);"> {{ scope.row.age }}</span><span style="color: rgb(128, 128, 128);">&lt;/</span><span style="color: rgb(86, 156, 214);">span</span><span style="color: rgb(128, 128, 128);">&gt;</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> &nbsp; &nbsp; </span><span style="color: rgb(128, 128, 128);">&lt;/</span><span style="color: rgb(86, 156, 214);">template</span><span style="color: rgb(128, 128, 128);">&gt;</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> &nbsp; &nbsp; </span><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(86, 156, 214);">template</span><span style="color: rgb(212, 212, 212);"> </span><span style="color: rgb(255, 77, 79);">#option="{ scope }"</span><span style="color: rgb(128, 128, 128);">&gt;</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> &nbsp; &nbsp; &nbsp; &nbsp; </span><span style="color: rgb(128, 128, 128);">&lt;</span><span style="color: rgb(78, 201, 176);">el-text</span><span style="color: rgb(212, 212, 212);"> </span><span style="color: rgb(156, 220, 254);">type</span><span style="color: rgb(212, 212, 212);">=</span><span style="color: rgb(206, 145, 120);">"primary"</span><span style="color: rgb(128, 128, 128);">&gt;</span><span style="color: rgb(0, 0, 0);">做</span><span style="color: rgb(0, 0, 0);"><strong>点</strong></span><span style="color: rgb(0, 0, 0);">什么</span><span style="color: rgb(128, 128, 128);">&lt;/</span><span style="color: rgb(78, 201, 176);">el-text</span><span style="color: rgb(128, 128, 128);">&gt;</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> &nbsp; &nbsp; </span><span style="color: rgb(128, 128, 128);">&lt;/</span><span style="color: rgb(86, 156, 214);">template</span><span style="color: rgb(128, 128, 128);">&gt;</span></p><p style="line-height: 1;"><span style="color: rgb(212, 212, 212);"> </span><span style="color: rgb(128, 128, 128);">&lt;/</span><span style="color: rgb(78, 201, 176);">AutoTable</span><span style="color: rgb(128, 128, 128);">&gt;</span></p><p style="line-height: 1;"><br></p><p style="line-height: 1;"><span style="color: rgb(86, 156, 214); font-size: 12px;">const</span><span style="color: rgb(212, 212, 212); font-size: 12px;"> </span><span style="color: rgb(79, 193, 255); font-size: 12px;">columnData</span><span style="color: rgb(212, 212, 212); font-size: 12px;"> </span><span style="color: rgb(0, 0, 0); font-size: 12px;">= ref([</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; {</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; prop: 'name',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; label: '姓名',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; order: 1,</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; editable: true,</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; width: '100'</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; },</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; {</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; prop: 'sex',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; label: '性别',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; order: 3,</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(89, 126, 247); font-size: 12px;"> filters: [</span></p><p style="line-height: 1;"><span style="color: rgb(89, 126, 247); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { text: '男', value: '男' },</span></p><p style="line-height: 1;"><span style="color: rgb(89, 126, 247); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; { text: '女', value: '女' }</span></p><p style="line-height: 1;"><span style="color: rgb(89, 126, 247); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; ],</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp;</span><span style="color: rgb(255, 169, 64); font-size: 12px;"> filterMethod: (value: string, row: any, column: any) =&gt; {</span></p><p style="line-height: 1;"><span style="color: rgb(255, 169, 64); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; const property = column['property']</span></p><p style="line-height: 1;"><span style="color: rgb(255, 169, 64); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return row[property] == value</span></p><p style="line-height: 1;"><span style="color: rgb(255, 169, 64); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; }</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; },</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; {</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; prop: 'age',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; label: '年龄',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; order: 2,</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; width: '',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; sortable: true</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; },</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp;{</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; prop: 'option',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; label: '操作',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; order: 4,</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; width: '',</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; &nbsp; &nbsp; sortable: false</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;"> &nbsp; &nbsp; },</span></p><p style="line-height: 1;"><span style="color: rgb(0, 0, 0); font-size: 12px;">])</span></p><table style="width: 100%;"><tbody><tr><th colspan="1" rowspan="1" width="272" style="text-align: center;">参数名</th><th colSpan="1" rowSpan="1" width="245.59">说明</th><th colSpan="1" rowSpan="1" width="174.59">默认值</th></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">tableData</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">要显示的数据数组</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">-</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">columnData</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">表头参数，如下表</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">-</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">selection</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">是否表头可选</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">false</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">v-model:selectAll</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">全选状态</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">false</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">height</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">表格高度，超过高度显示滚动条</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">40vh</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">loading</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">loading状态</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">false</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">loadingText</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">loading时的文字提示</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">正在加载中.....</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">@selectChange</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">选中状态改变的函数</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">参数：被选中的数据数组</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">@tableEdit</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">编辑后的回调函数</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">参数1：被修改的行数据<br>参数2：被修改的字段</td></tr></tbody></table><p><span style="font-size: 16px;"><strong>columnData参数说明</strong></span></p><table style="width: 100%;"><tbody><tr><th colSpan="1" rowSpan="1" width="324">参数名</th><th colSpan="1" rowSpan="1" width="273.37">说明</th></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">prop</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">字段标识，对应tableData要显示的字段</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">label</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">在表头显示的字段中文名</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">order</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">该列在表格中是第几列</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">editable</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">该列数据是否可以编辑</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">sortable</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">该列数据是否需要排序</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">width</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">该列的宽度</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">filters</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">该列的过滤条件：数组【{ text:'描述',value:'值' }】</td></tr><tr><td colspan="1" rowspan="1" width="auto" style="text-align: center;">filterMethod</td><td colspan="1" rowspan="1" width="auto" style="text-align: center;">过滤方法的回调</td></tr></tbody></table><p><br></p>`
  )
</script>

<style scoped></style>
