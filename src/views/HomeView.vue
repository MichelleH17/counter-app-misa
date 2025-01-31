<template>
  <div class="">
    <div class="text-6xl m-10">{{ count }}</div>
    <div class="text-4xl flex justify-center space-x-4">
      <button class="bg-gray-50 rounded border border-gray-200 px-2.5 py-2">-</button>
      <button class="bg-gray-50 rounded border border-gray-200 p-2">+</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
