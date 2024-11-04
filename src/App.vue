<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheNavBar from './components/TheNavBar.vue'
</script>

<template>
  <header>
    <TheNavBar />
  </header>

  <RouterView />
</template>

<style scoped>
</style>
