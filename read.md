
## 运行 parcel

```
rm -rf .cache

./node_modules/.bin/parcel index.html --no-cache

npx parcel index.html --no-cache

// 已经在start中写了 npm start 也可以实现

```

![img.png](img.png)

## 单元测试

安装了chai

```
 npm i -D chai@4.1.2
```

测试click事件需要用 spy（间谍）

```
 npm i -D chai-spies
```

## 框架搭建 & 持续集成（下）

Windows 用户运行 `npm run dev-test` 时会出现 BUG，貌似是因为 Windows 不支持 `&&` 符号，解决办法是：

将 `dev-test` 对应的命令 `parcel watch test/* --no-cache & karma start` 分别运行，运行方式如下

新开一个 Git Bash 窗口运行 `npx parcel watch test/* --no-cache`
再开一个 Git Bash 窗口运行 `npx karma start`

npm 使用默认源  `npm config delete registry`
npm 使用淘宝源  `npm config set registry https://registry.npm.taobao.org`
`npx parcel build index.js --no-cache --no-minify`
如果嫌切换不方便，可以安装 [nrm](https://github.com/Pana/nrm) 来快速切换源。



## npx vuepress dev docs 报错如何解决
报错主要是因为 npm 比较傻逼，用 yarn 代替 npm 即可。
```
rm -rf node_modules
``
搜 yarn ，找到官网，按说明安装 yarn（不要用 npm i -g yarn 来安装 yarn，因为 npm 傻逼）
```
yarn install
npx vuepress dev docs 不报错
```