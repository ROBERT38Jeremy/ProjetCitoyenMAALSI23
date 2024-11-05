<script setup>
import { ref } from 'vue';
import DropZone from './DropZone.vue';
import { useText } from '@/composables/useText';

const props = defineProps({
  text: String,
  words: Array, // Tous les mots disponibles (y compris les distracteurs)
  correctWords: Array, // Mots corrects correspondant aux zones de drop
  title: String,
});

const { getTextPartsAndIndex } = useText();
const { textParts, numbers } = getTextPartsAndIndex(props.text);
const completedText = ref(Array(props.correctWords.length).fill(''));

// Fonction pour gérer les mots déposés
function handleWordDrop(word, index) {
  if (props.correctWords[index] === word) {
    completedText.value[index] = word;
    return true; // Indique que le mot est correct
  }
  return false; // Indique que le mot est incorrect
}
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full">
    <div
      class="flex flex-col justify-center p-2 mt-3 border border-gray-400 rounded shadow w-10/12"
    >
      <h1 class="text-center font-bold text-4xl underline">{{ title }}</h1>
      <div class="flex justify-center gap-4 my-4">
        <!-- Afficher tous les mots disponibles, y compris les distracteurs -->
        <button
          v-for="(word, index) in words"
          :key="index"
          draggable="true"
          @dragstart="(e) => e.dataTransfer?.setData('text/plain', word)"
          class="px-2 py-1 bg-amber-400 text-slate-50 rounded text-base"
        >
          {{ word }}
        </button>
      </div>

      <p class="text-center text-lg">
        <span v-for="(el, idx) in textParts" :key="idx">
          <span v-html="el"></span>
          <!-- Afficher DropZone là où un mot est requis -->
          <DropZone
            v-if="numbers.includes(idx)"
            :index="numbers.indexOf(idx)"
            :expectedWord="props.correctWords[numbers.indexOf(idx)]"
            :onWordDropped="handleWordDrop"
          />
        </span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.inline-block {
  min-width: 50px;
  text-align: center;
}
</style>
