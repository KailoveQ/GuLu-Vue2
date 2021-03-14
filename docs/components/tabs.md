---
title: 'Tabs - 标签'

---
# 标签

&nbsp;
<ClientOnly>
  <tabs-demo-1></tabs-demo-1>
</ClientOnly>

```html
<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">财经</g-tabs-item>
    <g-tabs-item name="2">互联网</g-tabs-item>
    <g-tabs-item name="3">体育</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">财经新闻</g-tabs-pane>
    <g-tabs-pane name="2">互联网知识</g-tabs-pane>
    <g-tabs-pane name="3">体育新闻</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```
&nbsp;
<ClientOnly>
<tabs-demo-2></tabs-demo-2>
</ClientOnly>

```html
<g-tabs :selected="selected">
      <g-tabs-head>
        <g-tabs-item name="1">体育</g-tabs-item>
        <g-tabs-item name="2" disabled>疫情</g-tabs-item>
        <template slot="actions">
          <button>设置</button>
        </template>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="1">体育新闻</g-tabs-pane>
        <g-tabs-pane name="2">疫情新闻</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
```