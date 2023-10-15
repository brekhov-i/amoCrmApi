<template>
  <div class="main">
    <div class="row">
      <Dropdown
        :selectedOption="selectedOption"
        :options="options"
        @update:selectedOption="selectedOption = $event"
      />
      <Button
        :disabled="selectedOption.value === 'notSelected'"
        @click="create(selectedOption)"
        class="main__btn"
      >
        <Loader v-if="isLoading" />
        <template v-else>Создать</template>
      </Button>
      <ListEntities class="main__list" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "@/shared/ui/Button/Button.vue";
import Loader from "@/shared/ui/Loader/Loader.vue";
import Dropdown from "@/shared/ui/Dropdown/Dropdown.vue";
import { ref } from "vue";
import { useMainStore } from "@/app/store/mainStore";
import { storeToRefs } from "pinia";
import { TOption } from "@/shared/ui/Dropdown/types";
import ListEntities from "@/widgets/ListEntities";

const mainStore = useMainStore();
const { options, isLoading } = storeToRefs(mainStore);

const selectedOption = ref<TOption>({
  label: "Не выбрано",
  value: "notSelected",
});

const create = (option: TOption) => {
  mainStore.create(option);
};
</script>

<style lang="scss">
@import "@/app/styles/main.scss";

.main {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 30px;
}

.row {
  max-width: 500px;
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
}

.main__btn {
  width: max-content;
}
.main__list {
  grid-column: span 2;
}
</style>
