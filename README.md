# Vue3.x+Typescript+ElementPlus+Tailwindcss

This repository use `vue3.4` + `typescript` + `element-plus` + `tailwindcss`;Secondary packaging of `Axios`;Automaticakky generate menus and breadcrumb navigation based on router;Equipped with `ESLint`,`Prettier` and other tools;

<a href="https://lclovestudy.github.io/template-vue3.x-ts/#/login" title="System demonstration">System demonstration</a>

## Preview

1. Login

   ![alt text](./src/assets/images/image.png)

2. Home
   ![alt text](./src/assets/images/image-1.png)

3. Cumstom Components
   ![alt text](./src/assets/images/image-2.png)

## Install

```sh
pnpm install
```

## Start

```sh
pnpm dev
```

## Build

```sh
pnpm build
```

## Catalog Description

```sh
├── public
│ └── favicon.ico
├── src
│ ├── assets        Static files
│ │ ├── images      Images
│ │ └── font        Fonts
│ │ └── style       Styles
│ ├── components    Global shared components
│ ├── design        Global style,mainly for resetting the style of ElementPlus
│ ├── directive     Custom  Directives
│ ├── store         Pinia
│ ├── hooks         Custom Hooks
│ ├── main.ts
│ ├── utils         Global shared utils
│ ├── App.vue
│ ├── types         Type Declarations
│ ├── router        Config of router
│ │ └── modules     Route modules
│ │ └── index.ts
│ └── views         Page files
├── tailwind.config Config of Tailwind
├── package.json
├── vite.config.ts  Config of Vite

```

## Recommended deletion

In order to demonstrate, many business irrelevant dependencies have been added. Before going live for packaging, these irrelevant dependencies will be removed to ensure minimal volume

1. Code highlighting

   `highlight.js`
