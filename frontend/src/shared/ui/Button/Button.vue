<template>
  <button class="button" :class="`button--${typeButton}`">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { TypeButton } from "../types";

withDefaults(
  defineProps<{
    typeButton?: string;
  }>(),
  {
    typeButton: TypeButton.PRIMARY,
  }
);
</script>

<style lang="scss">
.button {
  padding: 8px 10px;
  border-radius: 5px;
  cursor: pointer;
  &.button--primary {
    background-color: rgb(0, 123, 255);
    color: #ffffff;
    font-weight: 500;
    font-size: 18px;
    transition: 0.3s background-color ease-in-out;

    &:not(:disabled) {
      &:hover {
        background-color: rgb(1, 82, 169);
        transition: 0.3s background-color ease-in-out;
      }
    }
  }

  &:disabled {
    cursor: default;
    background-color: rgb(225, 225, 225);
    border: 1px solid rgb(165, 165, 165);
    color: rgb(72, 72, 72);
  }
}
</style>
