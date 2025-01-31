import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  /* state */
  const count = ref(0)

  /* actions */
  function increaseCount() {
    count.value++
  }
  function decreaseCount() {
    count.value--
  }

  return {
    // state
    count,

    // actions
    increaseCount,
    decreaseCount,
  }
})
