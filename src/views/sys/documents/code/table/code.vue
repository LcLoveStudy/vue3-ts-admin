<template>
  <pre>
    <code class="language-html text-sm">
    &lt;el-checkbox v-model="selectAll" label="全选" size="large" /&gt;
    &lt;ss-table
      :tableData="tableData"
      :columnData="columnData"
      :selection="true"
      v-model:selectAll="selectAll"
      @selectChange="change"
      height="30vh"
      v-model:page="page"
      @currentChange="currentChange" 
    &gt;
      &lt;template #age="{ scope }"&gt;
        &lt;span class="text-sky-600" &gt;{ { scope.row.age } }&lt;/span&gt;
      &lt;/template&gt;
      &lt;template #option="{}"&gt;
        &lt;el-text type="primary" &gt;做点什么&lt;/el-text&gt;
      &lt;/template&gt;
    &lt;/ss-table&gt;

    &lt;script setup lang="ts"&gt;
      /** 列数据配置 */
      const columnData = ref([
        {
          prop: 'name',
          label: '姓名',
          order: 1,
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
      interface TableType {
        id: number
        name: string
        age: number
        sex: string
      }
      /** 表单数据 */
      const tableData = ref&lt;Array&lt;TableType>>([
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
      const change = (value: Array&lt;TableType>) => {
        console.log(value)
      }

      const page = ref({
        current: 1,
        total: 200,
        size: 20
      })
      const currentChange = () => {
        console.log(page.value)
      }
    &lt;/script&gt;
    </code>
  </pre>
</template>

<script setup lang="ts">
  import highlight from 'highlight.js'
  onMounted(() => {
    highlight.highlightAll()
  })
</script>

<style scoped></style>
