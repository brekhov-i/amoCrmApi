import { $api } from "@/shared/units/api";
import { AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { inject, ref } from "vue";
import { TTokenResponse } from "../types/responce";
import { TCreatedObj } from "../types";
import { TOption } from "@/shared/ui/Dropdown/types";
import { VueCookies } from "vue-cookies";

export const useMainStore = defineStore("mainStore", () => {
  const $cookie = inject<VueCookies>("$cookies");
  const isLoading = ref<boolean>(false);
  const createdObj = ref<TCreatedObj[]>([]);
  const options = ref<TOption[]>([
    { label: "Не выбрано", value: "notSelected" },
    { label: "Сделка", value: "leads" },
    { label: "Контакт", value: "contacts" },
    { label: "Компания", value: "companies" },
  ]);

  const create = async (option: TOption) => {
    try {
      isLoading.value = true;
      setTimeout(async () => {
        if (!$cookie?.get("token")) {
          await getToken();
        }
        await $api
          .post(`/create/${option.value}`, {})
          .then((res: AxiosResponse<number>) => {
            createdObj.value.push({
              id: res.data,
              title: option.label,
            });
          })
          .catch((e) => {
            console.log(e);
          })
          .finally(() => {
            isLoading.value = false;
          });
      }, 2000);
    } catch (e) {
      console.log(e);
      isLoading.value = false;
    }
  };

  const getToken = async (): Promise<void> => {
    try {
      await $api.get("/getToken", {
        headers: {
          "X-Client-Id": "31334466",
          "Content-Type": "application/json",
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createdObj,
    options,
    isLoading,
    create,
  };
});
