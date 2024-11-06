<script setup>
import { ref } from 'vue';
const test = ref(`
	<style>
		.test, .test * {
			all: revert
		}
		.one {
			color: red;
		}
	</style>

<div class="test">
	<h1>Test de rendu</h1>
	<img src="https://img.fotocommunity.com/portrait-de-tigre-b414cb5c-b28d-4e13-a956-c8503d730e77.jpg?height=1000" />
	<p class="one">Toto avec la class one</p>
</div>
`);
</script>

<template>
  <div class="w-full h-full">
    <div v-html="test"></div>
  </div>
</template>

<style scoped></style>
