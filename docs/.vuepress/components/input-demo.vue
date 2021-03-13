<template>
  <div class="input-wrapper">
    <g-input></g-input>
    <g-input disabled></g-input>
    <g-input readonly></g-input>
    <g-input error="错误信息"></g-input>
    <br>
    <g-input :value="xxx"></g-input>
    <br>
    <span>value:&nbsp;{{xxx}}</span>
  </div>
</template>

<script>
  import Input from '../../../src/input'

  export default {
    data(){
      return{ xxx:'双向绑定' }
    },
    components: { 'g-input': Input }
  }
</script>

<style lang="scss" scoped>
  @import "../styles/helper";

  .input-wrapper {
    padding-top: $wrapper-top;
  }
</style>