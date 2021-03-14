<template>
  <div class="content-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluContent'
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  flex-grow: 1;
}
</style>