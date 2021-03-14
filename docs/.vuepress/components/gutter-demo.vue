<template>
  <div class="gutter-wrapper">
    <g-row gutter="30">
      <g-col class="item" span="8"> <span> col-8; gutter-30;</span> </g-col>
      <g-col class="item" span="8"> <span> col-8; gutter-30;</span> </g-col>
      <g-col class="item" span="8"> <span> col-8; gutter-30;</span> </g-col>
    </g-row>
    <g-row gutter="20">
      <g-col class="item" span="8"> <span> col-8; gutter-20;</span> </g-col>
      <g-col class="item" span="8"> <span> col-8; gutter-20;</span> </g-col>
      <g-col class="item" span="8"> <span> col-8; gutter-20;</span> </g-col>
    </g-row>
    <g-row gutter="10">
      <g-col class="item" span="8"> <span> col-8; gutter-10;</span> </g-col>
      <g-col class="item" span="8"> <span> col-8; gutter-10;</span> </g-col>
      <g-col class="item" span="8"> <span> col-8; gutter-10;</span> </g-col>
    </g-row>
  </div>
</template>

<script>
  import Col from '../../../src/col'
  import Row from '../../../src/row'

  export default {
    components: {
      'g-col': Col,
      'g-row': Row
    },
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .gutter-wrapper { padding-top: $wrapper-top;
    .item { text-align: center; color: $font-color;
      > span { display: block; background: $background; }
    }
  }

</style>