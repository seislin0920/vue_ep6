<script setup>
import { useCounterStore } from "../stores/counter.js";
defineProps({
     msg: {
          type: String,
          required: true,
     },
});

const store = useCounterStore();
const { fetchapi } = store;
</script>

<template>
     <div class="greetings">
          <button @click="fetchapi">fetchapi</button>
          <h1 class="green">{{ msg }}</h1>
          <h3>
               You’ve successfully created a project with
               <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
               <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
          </h3>
     </div>
</template>

<style scoped>
h1 {
     font-weight: 500;
     font-size: 2.6rem;
     top: -10px;
}

h3 {
     font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
     text-align: center;
}

@media (min-width: 1024px) {
     .greetings h1,
     .greetings h3 {
          text-align: left;
     }
}
</style>
