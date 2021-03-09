# 咕噜 一个UI组件

[![Build Status](https://travis-ci.com/KailoveQ/GuLu-Vue2.svg?branch=main)](https://travis-ci.com/KailoveQ/GuLu-Vue2)

## 介绍

这是我在学习 Vue 过程中做的一个 **UI** 框架，希望对你有用。

## 安装

## 开始使用

1. 添加CSS样式

   安装 使用本框架前，请在 CSS 中开启 border-box

    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
   IE ８ 及以上浏览器都支持此样式。

   你还需要设置默认颜色等变量（后续会改为 SCSS 变量）
    ```html
    html {
              --button-height: 32px;
              --font-size: 14px;
              --button-bg: #ffff;
              --button-active-bg: #eee;
              --border-radius: 4px;
              --color: #333;
              --border-color: #999;
              --border-color-hover: #666;
          }
    ```
   IE 15 及以上浏览器都支持此样式。

2. 安装 gulu
    ```
    npm i --save gulu-vue2-demo
    ```
3. 引入 gulu
    ```vue
    import {Button, ButtonGroup, Icon} from 'frank-test-1-1'
    import 'frank-test-1-1/dist/index.css'
    export default {
        name: 'app',
        components: {
        'g-button': Button,
        'g-icon': Icon
        }
    }
      ```
4. 引入 svg symbols

  ```
  <script src="//at.alicdn.com/t/font_2405699_c00q8n018cl.js"></script>
  ```

## 文档

## 提问

## 变更记录
* 0.0.1版本 ：没有转译 --no-minify 样式不见了

  button轮子 icon轮子 button-group轮子
* 0.0.2版本 ：dist/css发布

  button轮子 icon轮子 button-group轮子
* 0.0.3版本 ：用户不在需要依靠引入轮子的 iconfount

  button轮子 icon轮子 button-group轮子
## 联系方式

## 贡献代码
