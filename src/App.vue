<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import {useCounterStore} from './stores/counter.js'
import{storeToRefs} from 'pinia'

const store = useCounterStore();
const {increment} = store; //function可以直接解包
const {doubleCount} = storeToRefs(store); //值無法直接解包
const clickadd = ()=>{
  increment();
}
console.log(doubleCount); 
</script>

<template>
  <header>
    <button @click="clickadd">click</button>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
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
