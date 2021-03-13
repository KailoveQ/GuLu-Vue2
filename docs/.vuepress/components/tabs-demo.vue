<template>
  <div class="tabs-wrapper">
    <g-tabs :selected.sync="selectedTab">
      <g-tabs-head>
        <g-tabs-item name='tab1'>
          <g-icon></g-icon>
          Tab1
        </g-tabs-item>
        <g-tabs-item name='tab2'>Tab2</g-tabs-item>
        <g-tabs-item name='tab3'>Tab3</g-tabs-item>
        <g-tabs-item name='tab4' disabled>Tab4</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name='tab1'>内容1</g-tabs-pane>
        <g-tabs-pane name='tab2'>内容2</g-tabs-pane>
        <g-tabs-pane name='tab3'>内容3</g-tabs-pane>
        <g-tabs-pane name='tab4'>内容4</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>
</template>

<script>
import Tabs from '../../../src/tabs'
import TabsBody from '../../../src/tabs-body'
import TabsHead from '../../../src/tabs-head'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
import Icon from '../../../src/icon'

export default {
  components: {
    'g-tabs': Tabs, 'g-tabs-head': TabsHead, 'g-tabs-body': TabsBody, 'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane, 'g-icon': Icon
  },
  data() { return {selectedTab: 'tab1'} }
}
</script>

<style lang="scss" scoped>

</style>