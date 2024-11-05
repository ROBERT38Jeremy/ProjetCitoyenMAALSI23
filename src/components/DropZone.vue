<script setup>
import { ref, onMounted } from 'vue';
import { useDropZone } from '@vueuse/core';

const props = defineProps({
  expectedWord: String,
  index: Number,
  onWordDropped: Function,
});

const dropZoneRef = ref(null);
const droppedWord = ref('');

// Initialisation de la zone de drop
onMounted(() => {
  useDropZone(dropZoneRef, {
    onDrop(files, event) {
      const word = event.dataTransfer?.getData('text');
      if (word) {
        // Vérifie si le mot est correct via la fonction onWordDropped
        const isCorrect = props.onWordDropped(word, props.index);
        if (isCorrect) {
          droppedWord.value = word;
        } else {
          alert('Mauvais mot !');
        }
      }
    },
    dataTypes: ['text/plain'],
  });
});
</script>

<template>
  <span
    ref="dropZoneRef"
    class="border-b-2 border-blue-400 rounded w-20 h-6 inline-block text-center"
  >
    {{ droppedWord || '' }}
  </span>
</template>

<style scoped>
.inline-block {
  min-width: 50px;
  text-align: center;
}
</style>
