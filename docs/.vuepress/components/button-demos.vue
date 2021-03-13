<template>
  <div class="button-wrapper">
    <g-button>默认按钮</g-button>
    <g-button >默认按钮</g-button>
    <g-button >默认按钮</g-button>
    <g-button >默认按钮</g-button>
    <g-button >默认按钮</g-button>
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