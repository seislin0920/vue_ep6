import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const list = ref([])
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  const fetchapi = async()=>{
    try{
    const res = await axios.get('https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card');
    list.value = res.data;
    }catch(error){
      //error
    }
}

  return { count, doubleCount, increment, list, fetchapi}
})
