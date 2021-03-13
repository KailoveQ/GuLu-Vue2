<template>
  <div class="input-wrapper">
    <g-input v-model="value"></g-input>
    <br>
    value:{{ value }}
  </div>
</template>

<script>
import Input from '../../../src/input'

export default {
  components: {
    'g-input': Input
  },
  data() {
    return {
      value: '双向绑定'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../styles/helper";

.input-wrapper {
  padding-top: $wrapper-top;
}
</style>