<template>
  <div class="">
    <div class="text-6xl m-10">{{ storeCounter.count }}</div>
    <div class="text-4xl flex justify-center space-x-4">
      <button @click="storeCounter.decreaseCount" class="bg-gray-50 rounded border border-gray-200 px-2.5 py-2">-</button>
      <button @click="storeCounter.increaseCount" class="bg-gray-50 rounded border border-gray-200 p-2">+</button>
    </div>
    <hr class="my-10 max-w-md mx-auto">
    <div>
      The counter is: {{ oddOrEven }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

const count = ref(0)

const oddOrEven = computed(() => {
  if (count.value % 2 === 0) return 'even'
  return 'odd'
})
</script>
