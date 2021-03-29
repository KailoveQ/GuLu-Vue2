<template>
  <div class="popover-wrapper">
    <h2>预览</h2>
    <g-popover position="bottom">
      <template slot="content">
        popover 中的内容
      </template>
      <g-button>下方显示内容</g-button>
    </g-popover>
    <g-popover>
      <template slot="content">
        popover 中的内容
      </template>
      <g-button>点击显示</g-button>
    </g-popover>
    <g-popover trigger="hover">
      <template slot="content">
        popover 中的内容
      </template>
      <g-button>hover 显示内容</g-button>
    </g-popover>
    <h2>使用方法</h2>
  </div>
</template>

<script>
  import Popover from '../../../src/popover'
  import Button from '../../../src/button'

  export default {
    components:{
      'g-popover':Popover,
      'g-button': Button
    }
  }
</script>

<style lang="scss" scoped>

</style>