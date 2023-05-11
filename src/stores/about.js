import { defineStore } from "pinia";
import { ref } from "vue";

export const useAboutstore = defineStore("about", () => {
     const name = ref("Jay");
     const setname = (n1) => {
          name.value = n1;
     };

     return { name, setname };
});
