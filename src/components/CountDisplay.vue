<template>
  <div class="text-6xl m-10">{{ storeCounter.count }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'

const storeCounter = useCounterStore()

</script>
