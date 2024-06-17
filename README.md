# vue3+ts+el-plus

仓库为vite构建包含vue3.4 + typescript + element-plus + tailwindcss 的开箱即用模板；实现了axios二次封装；根据路由自动生成菜单、面包屑导航；配置了 eslint，pretty 等校验工具；整合了各类工具函数和Hooks；

## 下载依赖

```sh
pnpm install
```

## 启动项目

```sh
pnpm dev
```

## 项目打包

```sh
pnpm build
```

## 目录说明

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
│ ├── hooks         自定义hook
│ ├── main.ts       入口文件
│ ├── utils         工具函数文件夹
│ ├── App.vue       根组件
│ ├── types         类型声明
│ ├── router        路由配置
│ │ └── modules     路由模块
│ │ └── index.ts    路由的入口文件
│ └── views         页面文件夹
├── tailwind.config tailwind配置
├── package.json    项目依赖和指令
├── vite.config.ts  vite配置

```

## 推荐删除
为了展示，添加了很多于业务无关的依赖，在上线打包前将无关依赖删除确保体积最小

1.代码高亮
```js
highlight.js
```

2.用于tiff图片的显示
```js
tiff.js 
```

3.leaflet瓦片图相关
```js
leaflet leaflet-minimap @types/leaflet 
```

4.wangeditor富文本相关
```js
@wangeditor/editor @wangeditor/editor-for-vue
```

