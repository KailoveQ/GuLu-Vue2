<template>
  <div class="group-wrapper">
    <g-button-group>
      <g-button>默认按钮</g-button>
      <g-button>默认按钮</g-button>
      <g-button>默认按钮</g-button>
    </g-button-group>
  </div>
</template>

<script>
import ButtonGroup from '../../../src/button-group'
import Button from '../../../src/button'

export default {
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup
  }
}
</script>
<style lang="scss" scoped>
@import "../styles/helper";

.group-wrapper {
  padding-top: $wrapper-top;
}
</style>