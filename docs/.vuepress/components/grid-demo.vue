<template>
  <div class="grid-wrapper">
    <g-row class="row">
      <g-col class="item" span="24">col-24</g-col>
    </g-row>
    <g-row>
      <g-col class="item" span="12">col-12</g-col>
      <g-col class="item" span="12">col-12</g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="8">col-8</g-col>
      <g-col class="item" span="8">col-8</g-col>
      <g-col class="item" span="8">col-8</g-col>
    </g-row>
    <g-row class="row">
      <g-col class="item" span="6">col-6</g-col>
      <g-col class="item" span="6">col-6</g-col>
      <g-col class="item" span="6">col-6</g-col>
      <g-col class="item" span="6">col-6</g-col>
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
    }
  }
</script>
<style lang="scss" scoped>
@import "../styles/helper";
.grid-wrapper{
  > .row{ padding: .2em;
    > .item { text-align: center; color: $font-color;
      &:nth-child(odd){ background: $background; }
      &:nth-child(even){ background: lighten($background,20%); color: $font-color; }
    }
  }
}
</style>