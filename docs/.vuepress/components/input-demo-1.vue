<template>
  <div style="padding-top: 16px;">
    <h2>简单用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <g-input></g-input>
    <g-input disabled></g-input>
    <g-input readonly></g-input>
    <g-input error="错误信息"></g-input>
    <br>
    <g-input :value="xxx"></g-input>
    <br>
    <span>输入的值:&nbsp;{{xxx}}</span>
  </div>
</template>
<script>
  import GInput from '../../../src/input'

  export default {
    components: {'g-input':GInput},
    data(){
      return{ xxx:'小可爱' }
    }
  }
</script>
<style lang="scss" scoped>
</style>