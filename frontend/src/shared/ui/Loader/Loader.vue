<template>
  <span class="loader"></span>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.loader {
  width: 30px;
  height: 30px;
  border: 3.5px solid #fff;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
