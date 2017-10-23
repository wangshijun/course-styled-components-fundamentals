# 组件化必杀技：`styled-components` 简明教程

## 课程介绍

通过将 ES6 中的模板字符串（`template literals`）特性创造性的运用到 CSS 编码上，`styled-components` 成了前端社区现象级的 `CSS-IN-JS` 解决方案，能让我们在不用担心样式和组件之间如何关联的情况下用 CSS 书写组件，让样式组件真正成为开发的基本单元。

那么，如何在 `React/React Native` 项目中使用 `styled-components`？如何改造现有项目？如何提高代码复用度和适应变化的能力？**共 8 小节，23 分钟**，本视频教程将为你打开 `styled-components` 的大门，让你熟知 `styled-components` 的主要特性，视频演示用的源码将会放在 Github 上供你调试。

## 适用人群

* [必须]具备前端基础知识，了解 ES6；
* [必须]具备 React 基础知识，有开发经验更好；
* [可选]期望跟上社区发展动态，学习最新的开发技术，如果满足这点，前两点可忽略；
* [可选]具备 React Native 基础知识，有开发经验的更好；

## 内容目录

### 1. 用 `styled-components` 编写简单的 `React` 组件

实例演示使用 `styled-components` 编写 `React` 组件基本步骤和语法，把要基于 `classNames` 才能实现的样式关联去掉，用纯 CSS 的方式去书写 `React` 组件。

### 2. 用 `props` 调整组件样式，真正发挥 `JS` 的威力

使用 `styled-components` 编写组件的时候，可以在模板字符串中传入函数，或者表达式，这样就可以根据传给组件的 props 来调整组件的样式，让你真正体会到 `CSS-IN-JS` 的乐趣和威力。

### 3. 用 `attrs` 封装组件属性，提高代码复用

年年岁岁花相似，岁岁年年人不同，编写代码同样会有这样的问题，使用 `attrs` 机制不仅让我们在组件中封装样式，也能封装属性，极大的提高代码复用。

### 4. 用 `extend` 创建组件变种，实现样式继承

用 `JS` 书写样式就失去了继承的能力？使用 `styled-components` 提供的 `extend` 机制，让我们找回这种能力，单重继承？多重继承？随你所需。

### 5. 用 `injectGlobal` 设置全局样式

组件化之后怎么设置 `body` 样式？因为 `body` 是无论如何不能被写成一个组件的，好在 `styled-components` 给我们提供了 `injectGlobal` 辅助函数来设置页面的全局样式。

### 6. 用 `ThemeProvider` 实现主题功能

把应用中常用的字体、颜色、尺寸集中起来管理能极大提高代码适应变化的能力，这种功能或设计可以常被称为"主题"（亦可称皮肤）的"作用"，实例演示 `styled-components` 的主题机制。

### 7. 用 `keyframes` 实现界面动画

恰到好处的动画能让用户对你的应用爱不释手，`styled-components` 提供的 `keyframes` 辅助函数能够让我们很容易的把 `CSS` 里面的动画迁移到组件中。

### 8. 在 `React Native` 中使用 `styled-components`

`styled-components` 也为 `React Native` 提供了很好的支持，哪些地方是完全相同的？哪些地方需要你注意？本节视频为你解惑。

## 源码链接

代码仓库：[wangshijun/course-styled-components-fundamentals](https://github.com/wangshijun/course-styled-components-fundamentals)

运行方法（建议安装和使用 [yarn](https://yarnpkg.com/en/)）

```shell
git clone https://github.com/wangshijun/course-styled-components-fundamentals.git
cd course-styled-components-fundamentals
yarn
yarn start

# react-native 代码的运行直接参照 react-native 官网文档即可
```

要运行每节课的代码，只需要将仓库 `checkout` 下面对应的版本。

1. [用 `styled-components` 编写简单的 `React` 组件](https://github.com/wangshijun/course-styled-components-fundamentals/commit/f0a8891339305a513fbcc20481c79e1dd5e1aad8)
1. [用 `props` 调整组件样式，真正发挥 `JS` 的威力](https://github.com/wangshijun/course-styled-components-fundamentals/commit/7abd6a4a69d8175ddd7f9a7ca78e4e857f1e5ce2)
1. [用 `attrs` 封装组件属性，提高代码复用](https://github.com/wangshijun/course-styled-components-fundamentals/commit/0155754871ca2b20eb8f7e06898367e0b64ef7f9)
1. [用 `extend` 创建组件变种，实现样式继承](https://github.com/wangshijun/course-styled-components-fundamentals/commit/e0b7741188e72dec976b0508d006d75097c62b8d)
1. [用 `injectGlobal` 设置全局样式](https://github.com/wangshijun/course-styled-components-fundamentals/commit/5c3d55bee67b074d775b82f631faa0b617fed7e6)
1. [用 `ThemeProvider` 实现主题功能](https://github.com/wangshijun/course-styled-components-fundamentals/commit/e4ae93446f3fddb689828563bb4ae3d9344db395)
1. [用 `keyframes` 实现界面动画](https://github.com/wangshijun/course-styled-components-fundamentals/commit/85c56ec1b05c70defbb9f0e4aa3d1e8fa7da1a44)
1. [在 `React Native` 中使用 `styled-components`](https://github.com/wangshijun/course-styled-components-fundamentals/commit/2ba53f047a81cf31390156e9a5418019bf0c3386)

## 运行环境

* Node.js v8.6.0
* React v16
* React Native v0.49.0
* VSCode v1.17.1 + Vim
* Chrome v61

## 参考资料

* [styled-components docs](https://www.styled-components.com/docs)

## 视频地址

关注《前端周刊》微信公众号，回复 `course-styled-components` 后获取高清视频教程下载地址。

![cover.png](./cover.png)

