<template>
  <div style="padding-top: 16px;">
    <h2>Tab 切换</h2>
    <p>
      <strong>预览</strong>
    </p>
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

    <p>
      <strong>代码</strong>
    </p>
  </div>
</template>
<script>
import GTabs from '../../../src/tabs'
import GTabsBody from '../../../src/tabs-body'
import GTabsHead from '../../../src/tabs-head'
import GTabsItem from '../../../src/tabs-item'
import GTabsPane from '../../../src/tabs-pane'

export default {
  components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane},
  data() {
    return {
      selected: '1',
    }
  }
}
</script>
<style lang="scss" scoped>
</style>