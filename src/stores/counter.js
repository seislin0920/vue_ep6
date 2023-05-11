import axios from "axios";
import { defineStore, storeToRefs } from "pinia";
import { computed, ref } from "vue";
import { useAboutstore } from "./about.js";

export const useCounterStore = defineStore("counter", () => {
     const aboutstore = useAboutstore();
     const { name } = storeToRefs(aboutstore);
     const { setname } = aboutstore;

     const count = ref(1);
     const list = ref([]);
     const doubleCount = computed(() => {
          return name.value + count.value * 2;
     });
     function increment() {
          count.value++;
     }
     const fetchapi = async () => {
          try {
               const res = await axios.get("http://140.109.82.44/assets");
               list.value = res.data;
          } catch (error) {
               //error
          }
     };

     return { count, doubleCount, increment, list, fetchapi, setname }; //about中setname可納爲自己的函式
});
