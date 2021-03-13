<template>
  <div class="button-wrapper">
    <g-button>默认按钮</g-button>
    <g-button icon="settings">默认按钮</g-button>
    <g-button icon="settings" icon-position="right">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button>
  </div>
</template>

<script>
import Button from '../../../src/button'

export default {
  components: {
    'g-button': Button,
  },
}

</script>

<style lang="scss" scoped>
.button-wrapper {
  padding: 0 10px;
}
</style>