<template>
  <div class="">
    <div class="text-6xl m-10">{{ count }}</div>
    <div class="text-4xl flex justify-center space-x-4">
      <button @click="decreaseCount" class="bg-gray-50 rounded border border-gray-200 px-2.5 py-2">-</button>
      <button @click="increaseCount" class="bg-gray-50 rounded border border-gray-200 p-2">+</button>
    </div>
    <hr class="my-10 max-w-md mx-auto">
    <div>
      The counter is: {{ oddOrEven }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const count = ref(0)

function increaseCount() {
  count.value++
}

function decreaseCount() {
  count.value--
}

const oddOrEven = computed(() => {
  if (count.value % 2 === 0) return 'even'
  return 'odd'
})
</script>
