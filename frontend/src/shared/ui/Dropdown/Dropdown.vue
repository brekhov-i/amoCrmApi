<template>
  <label class="dropdown" ref="elDropdwon">
    <div class="dropdown__value" @click="isOpen = !isOpen">
      {{ getLabel() }}
      <svg
        width="11"
        height="7"
        viewBox="0 0 11 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.04038 5.95962C5.29422 6.21346 5.70578 6.21346 5.95962 5.95962L10.0962 1.82304C10.35 1.5692 10.35 1.15765 10.0962 0.903806C9.84235 0.649965 9.4308 0.649965 9.17696 0.903806L5.5 4.58076L1.82304 0.903806C1.5692 0.649965 1.15765 0.649965 0.903806 0.903806C0.649965 1.15765 0.649965 1.5692 0.903806 1.82304L5.04038 5.95962ZM4.85 4.5L4.85 5.5L6.15 5.5L6.15 4.5L4.85 4.5Z"
          fill="grey"
        />
      </svg>
    </div>
    <ul class="dropdown__list" :class="isOpen ? 'open' : ''">
      <li
        class="list__item"
        v-for="option in options"
        :key="option[optionValue]"
        @click="emits('update:selectedOption', option)"
        :class="option[optionValue] === selectedOption.value ? 'active' : ''"
      >
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :class="option[optionValue] === selectedOption.value ? 'show' : ''"
        >
          <path d="M1 7L6 12L16.5 1" stroke="black" />
        </svg>

        {{ option[optionLabel] }}
      </li>
    </ul>
  </label>
</template>

<script setup lang="ts">
import { onMounted, ref, toRefs } from "vue";
import { TOption } from "./types";

const props = withDefaults(
  defineProps<{
    selectedOption: TOption;
    options: TOption[];
    optionLabel?: string;
    optionValue?: string;
  }>(),
  {
    optionLabel: "label",
    optionValue: "value",
  }
);

const { selectedOption, options } = toRefs(props);
const isOpen = ref<boolean>(false);
const elDropdwon = ref<HTMLElement>();

const emits = defineEmits<{
  (e: "update:selectedOption", value: TOption): void;
}>();

const getLabel = (): string | undefined => {
  return options.value.find((el) => el.value === selectedOption.value.value)
    ?.label;
};

onMounted(() => {
  document.addEventListener("click", (e) => {
    if (e.composedPath().findIndex((el) => el === elDropdwon.value) === -1) {
      isOpen.value = false;
    }
  });
});
</script>

<style scoped lang="scss">
.dropdown {
  width: max-content;
  height: auto;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  &__value {
    min-width: 300px;
    width: max-content;
    height: 100%;
    padding: 5px 8px;
    border-radius: 2px;
    border: 1px solid grey;
    cursor: pointer;
    box-shadow: 0px 3px 4px 0px rgba(34, 60, 80, 0.2);
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
      margin-left: auto;
      width: 15px;
      height: 15px;
    }
  }

  &__list {
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border: 1px solid grey;
    border-radius: 4px;
    opacity: 0;
    visibility: hidden;
    list-style: none;
    background-color: #ffffff;

    &.open {
      opacity: 1;
      visibility: visible;
    }

    .list__item {
      width: 100%;
      height: auto;
      padding: 5px 10px;
      cursor: pointer;

      &.active {
        background-color: lightgray;
      }

      svg {
        opacity: 0;
        &.show {
          opacity: 1;
        }
      }
    }
  }
}
</style>
