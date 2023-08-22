# vue3+ts+el-plus

仓库为项目初始化模板，使用的 vite 构建，包含 vue3.3+typescript+element-plus，开箱即用，已经删除无用代码与无用文件，创建了基本的 axios 二次封装（请根据需求进行修改）以及 vue，vue-router 包的自动引入，并配置了侧边导航栏（自行根据需求修改），配置了面包屑导航

## 下载依赖

```sh
yarn install
```

### 启动项目

```sh
yarn dev
```

### 项目打包

```sh
yarn build
```

### 目录说明

```sh
├── public
│ └── favicon.ico
│ └── ipconfig.ts   ip和端口管理
├── src
│ ├── assets        静态文件
│ │ ├── images      图片
│ │ └── font        字体包
│ │ └── style       样式
│ ├── components    全局共用组件
│ ├── design        全局样式设计，主要对element-plus的样式重置
│ ├── directive     自定义指令
│ ├── store         数据存储store
│ ├── main.ts       入口文件
│ ├── utils         工具函数文件夹
│ ├── App.vue       根组件
│ ├── router        路由配置
│ │ └── modules     路由模块
│ │ └── index.ts    路由的入口文件
│ └── views         页面文件夹
├── types           类型声明
├── package.json    项目依赖和指令

```

### 推荐删除

为了展示，添加了很多于业务无关的依赖，在上线打包前将无关依赖删除确保体积最小
highlight.js 代码高亮
tiff.js 显示 tiff 图片
