
## 运行 parcel

```
rm -rf .cache

./node_modules/.bin/parcel index.html --no-cache

npx parcel index.html --no-cache

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