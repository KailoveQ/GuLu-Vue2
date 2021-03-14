---
title: 'Input - 输入框'

---
# 输入框
&nbsp;
<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

```html
<g-input></g-input>
    <g-input disabled></g-input>
    <g-input readonly></g-input>
    <g-input error="错误信息"></g-input>
    <br>
    <g-input :value="xxx"></g-input>
    <br>
    <span>输入的值:&nbsp;{{xxx}}</span>
```

&nbsp;
<ClientOnly>
<input-demo-2></input-demo-2>
</ClientOnly>
```vue
    data () {
        return {
          value: '1',
        }
    }
    <g-input v-model="value"></g-input>
     <div>
       value: {{value}}
     </div>
```
