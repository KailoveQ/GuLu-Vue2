<template>
  <div style="padding-top: 16px;">
    <p>
      <strong>预览</strong>
    </p>
    <g-icon name="info"></g-icon>
    <g-icon name="error"></g-icon>
    <g-icon name="loading"></g-icon>
    <g-icon name="left"></g-icon>
    <g-icon name="down"></g-icon>
    <g-icon name="thumbs-up"></g-icon>
    <g-icon name="download"></g-icon>
    <g-icon name="right"></g-icon>
    <g-icon name="settings"></g-icon>

  </div>

</template>
<script>
import Button from '../../../src/button'
import Icon from '../../../src/icon'
export default {
  components: {
    'g-button': Button,
    'g-icon': Icon
  }
}
</script>