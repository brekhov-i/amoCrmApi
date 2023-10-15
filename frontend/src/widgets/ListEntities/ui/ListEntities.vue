<template>
  <div class="listEntities">
    <div class="entity" v-for="obj in createdObj" :key="obj.id">
      <div class="entity__number">№ {{ obj.id }}</div>
      <div class="entity__title">{{ obj.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMainStore } from "@/app/store/mainStore";
import { storeToRefs } from "pinia";

const mainStore = useMainStore();
const { createdObj } = storeToRefs(mainStore);
</script>

<style scoped lang="scss">
.listEntities {
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 10px;

  .entity {
    width: auto;
    height: auto;
    padding: 15px 30px;
    border-radius: 10px;
    border: 1px solid grey;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    &__number {
      font-size: 14px;
      margin-bottom: 20px;
    }

    &__title {
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>
