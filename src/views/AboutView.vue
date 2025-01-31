<template>
  <div class="about">
    <h1 class="text-6xl m-10">About</h1>
    <button @click="storeCounter.increaseCount" class="bg-gray-50 rounded border border-gray-200 px-2.5 py-2">
      {{ storeCounter.count }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()
</script>

