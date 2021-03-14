<template>
  <div class="align-wrapper">
    <g-row class="row" align="left">
      <g-col class="item" span="8">left</g-col>
      <g-col class="item" span="8">left</g-col>
    </g-row>
    <g-row class="row" align="center">
      <g-col class="item" span="8">center</g-col>
      <g-col class="item" span="8">center</g-col>
    </g-row>
    <g-row class="row" align="right">
      <g-col class="item" span="8">right</g-col>
      <g-col class="item" span="8">right</g-col>
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
  .align-wrapper{ text-align: center; color: $font-color;
    .row{ padding-top: $wrapper-top;
      > .item { text-align: center;
        &:nth-child(odd){ background: $background; }
        &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
      }
    }
  }
</style>