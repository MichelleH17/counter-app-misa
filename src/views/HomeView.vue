<template>
  <div class="">
    <CountDisplay />
    <div class="text-4xl flex justify-center space-x-4">
      <button @click="storeCounter.decreaseCount" class="bg-gray-50 rounded border border-gray-200 px-2.5 py-2">-</button>
      <button @click="storeCounter.increaseCount" class="bg-gray-50 rounded border border-gray-200 p-2">+</button>
    </div>
    <hr class="my-10 max-w-md mx-auto">
    <div>
      The counter is: {{ storeCounter.oddOrEven }}
    </div>
    <hr class="my-10 max-w-md mx-auto">
    <h3 class="text-xl mb-2">
      Edit counter:
    </h3>
    <input v-model="storeCounter.count" type="number" class="bg-gray-50 rounded border border-gray-200 p-2">
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import CountDisplay from '@/components/CountDisplay.vue'

const storeCounter = useCounterStore()

</script>
