<script setup>
import { storeToRefs } from "pinia";
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
import { useCounterStore } from "./stores/counter.js";
import { useDialog } from "./stores/dialog.js";

const { dialogState } = storeToRefs(useDialog);
const store = useCounterStore();
const { increment, setname } = store; //function可以直接解包
const { doubleCount } = storeToRefs(store); //值無法直接解包
const clickadd = () => {
     increment();
};
const clickset = (username) => {
     setname(username);
};
console.log(doubleCount);
</script>

<template>
     <header>
          <button @click="clickadd">click</button>
          <button @click="clickset('Andy')">clickset</button>
          <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

          <div class="wrapper">
               <HelloWorld msg="You did it!" />
          </div>
     </header>

     <main>
          <TheWelcome />
     </main>
     <div class="dialog">
          <GDialog v-model="dialogState">
               <span class="text-black"> Content </span>
          </GDialog>
          <button class="btn btn--primary" @click="dialogState = true">Open Dialog</button>
     </div>
</template>

<style scoped>
header {
     line-height: 1.5;
}

.logo {
     display: block;
     margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
     header {
          display: flex;
          place-items: center;
          padding-right: calc(var(--section-gap) / 2);
     }

     .logo {
          margin: 0 2rem 0 0;
     }

     header .wrapper {
          display: flex;
          place-items: flex-start;
          flex-wrap: wrap;
     }
}
</style>
