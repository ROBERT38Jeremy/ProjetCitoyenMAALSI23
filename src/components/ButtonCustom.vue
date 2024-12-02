<template>
  <button :style="`--clr:${color}`" :class="actif ? 'actif' : ''" class="rounded-t-md">
    <span>{{ text }}</span>
    <i></i>
  </button>
</template>

<script setup>
// actif ? 'actif':''
const props = defineProps({
  actif: {
    type: Boolean,
  },
  color: {
    type: String,
    default: '#39FF14',
  },
  text: {
    type: String,
  },
});
</script>

<style scoped>
.actif {
  background-color: hsla(160, 100%, 37%, 0.2);
}

button {
  padding: 0.7em 0;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  padding: 0.7em 1em;
  width: fit-content;
}
</style>
