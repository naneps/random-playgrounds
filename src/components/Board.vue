<template>
  <div class="flex flex-col items-center mb-8 justify-center gap-2">
    <div v-for="(row, x) in board" :key="x" class="flex gap-2">
      <div
        :class="'border border-secondary rounded-lg  w-28 h-28 hover:bg-primary transition-all ease-linear cursor-pointer material-icons-outlined text-4xl flex justify-center items-center'"
        v-for="(cell, y) in row"
        :key="y"
        @click="MakeMove(x, y)"
      >
        {{ cell === "X" ? "close" : cell === "O" ? "circle" : "" }}
      </div>
    </div>
  </div>
</template>
<script setup>
    import {defineProps } from 'vue'
    const props = defineProps()
</script>
<style>
</style>