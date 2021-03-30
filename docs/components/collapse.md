---
title: 'Collapse - 折叠面板'
---
# 折叠面板

&nbsp;
<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>
```vue
<template>
    <div>
      <h2>预览</h2>
      <g-collapse :selected.sync="selectedTab">
        <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
        <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
        <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
      </g-collapse>
      {{ selectedTab }}
      <h2>使用方法</h2>
    </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  components:{ 'g-collapse': Collapse, 'g-collapse-item': CollapseItem, },
  data(){
      return{
        selectedTab : ['1']
      }
    },
}
</script>
```
&nbsp;
<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>
1. 双向绑定
 Collapse 组件的双向绑定与 Vue 官方的类似，支持 .sync 修饰符。
2. 必选参数
Collapse 组件必须接受两个参数： title 用于显示折叠面板的标题。 name 用于表示选中的 item。
<i-collapse-item title="标题1" name="1">1</i-collapse-item>
3. 手风琴效果
Collapse 组件还支持手风琴效果，就是只能同时显示一个面板内容,可以通过设置 single 属性来更改，默认是 false 。
   
&nbsp;
<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

```vue
<template>
  <div>
    <g-collapse :selected.sync="selectedTab" single>
      <g-collapse-item title="标题1" name="1">1</g-collapse-item>
      <g-collapse-item title="标题2" name="2">2</g-collapse-item>
      <g-collapse-item title="标题3" name="3">3</g-collapse-item>
    </g-collapse>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  components:{ 'g-collapse': Collapse, 'g-collapse-item': CollapseItem, },
  data(){ return{ selectedTab : ['1'] } },
}
</script>
```