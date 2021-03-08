<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"></use>
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  // props: ['icon', 'iconPosition'] //要么是 left  right
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return !(value !== 'left' && value !== 'right')
      }  //Vue 的属性检查器
    }
  }
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
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;

    &:hover {
      border-color: var(--border-color-hover);
    }

    &:active {
      background-color: var(--button-active-bg);
    }

    &:focus {
      outline: none;
    }

    > .content {
      order: 2;
    }

    > .icon {
      order: 1;
      margin-right: .1em;
    }

    &.icon-right {
      > .content {
        order: 1;
      }

      > .icon {
        order: 2;
        margin-right: 0;
        margin-left: .1em;
      }
    }
  }
</style>