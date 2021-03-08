<template>
  <button v-if="iconPosition==='right'" class="g-button">
    <slot></slot>
    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
  </button>

  <button v-else class="g-button">

    <svg v-if="icon" class="icon" aria-hidden="true">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <slot></slot>
  </button>

</template>
<script>
export default {
  props: ['icon', 'iconPosition'] //要么是 left  right
}
</script>
<style lang="scss">
  .g-button {
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--border-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    &:hover {
      border-color: var(--border-color-hover);
    }
    &:active {
      background-color: var(--button-active-bg);
    }
    &:focus {
      outline: none;
    }
  }
</style>