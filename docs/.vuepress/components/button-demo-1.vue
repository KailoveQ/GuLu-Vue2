<template>
  <div style="padding-top: 16px;">
    <h2>1.单个按钮</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认样式</g-button>
    <g-button icon="settings">添加iocn</g-button>
    <g-button icon="thumbs-up">点赞</g-button>
    <g-button :loading="true">加载按钮</g-button>
    <g-button disabled>不可点击</g-button>
    <p>
      <strong>代码</strong>
    </p>
    <pre><code>{{content1}}</code></pre>

    <h2>2.按钮组</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button>4</g-button>
      <g-button>5</g-button>
      <g-button>6</g-button>
      <g-button>7</g-button>
      <g-button>8</g-button>
      <g-button>9</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <p>
      <strong>代码</strong>
    </p>
  </div>

</template>
<script>
  import Button from '../../../src/button'
  import ButtonGroup from '../../../src/button-group'

  export default {
    components: {
      'g-button': Button,
      'g-button-group':ButtonGroup
    },
    data () {
      return {
        content1: `
          <g-button>默认样式</g-button>
          <g-button icon="settings">添加iocn</g-button>
          <g-button icon="thumbs-up">点赞</g-button>
          <g-button :loading="true">加载按钮</g-button>
          <g-button disabled>不可点击</g-button>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>