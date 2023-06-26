<template>
  <div class="width-700">
    <div class="fs-25 fw-600">聚焦(v-focus)</div>
    <div class=" mt-25">
      <span class="fs-20 inline-block">应用场景：</span><br />
      手动控制元素的聚焦状态，支持所有的html标签<br />
      <span class="fs-20 mt-20 inline-block">用法说明:</span><br />
      使用v-focus绑定一个布尔类型的值，true为聚焦，false为失去焦点<br />
      <span class="fs-20 mt-20 inline-block">示例:</span><br />
      <pre class="code mt-20">
          &lt;el-input <span class="tomato">v-focus="focused"</span>/&gt;
          &lt;el-button @click="focused=!focused"&gt;点我改变聚焦状态&lt;el-button/&gt;
          const focused = ref(false)
        </pre>
    </div>
  </div>
  <el-card class="show_card">
    <el-input class="mr-20" style="width:200px" v-focus="focused" />
    <el-button @click="focused = !focused" type="primary">点我改变聚焦状态</el-button>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const focused = ref(false)
</script>

<style scoped lang="less">
.code {
  border-radius: 3px;
  padding: 5px 10px;
  background-color: #ccc;
  color: rgb(0, 132, 255);
}

.show_card {
  position: fixed;
  right: 500px;
  top: 200px;
}
</style>