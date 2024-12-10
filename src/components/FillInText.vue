<script setup>
import { ref, computed, watch, onBeforeMount, onMounted } from 'vue';
import DropZone from './DropZone.vue';
import { useText } from '@/composables/useText';
import { useSessionDatas } from '@/stores/SessionDatas';
import { storeToRefs } from 'pinia';

const { initSessionResponse, addSessionResponse } = useSessionDatas();
const { sessionResponse } = storeToRefs(useSessionDatas());

const props = defineProps({
  currentIndex: Number,
  text: String,
  words: Array, // Tous les mots disponibles (y compris les distracteurs)
  correctWords: Array, // Mots corrects correspondant aux zones de drop
  title: String,
  exampleCode: String, // Exemple de code HTML/CSS à afficher
});

const { getTextPartsAndIndex } = useText();
const { textParts, numbers } = getTextPartsAndIndex(props.text);
const completedText = ref(Array(props.correctWords.length).fill(''));

// État du bouton copier
const copyButtonText = ref('Copier le code');
const copyButtonIcon = ref(null);

// Vérifier si toutes les bonnes réponses sont complétées
const isComplete = computed(() =>
  completedText.value.every((word, index) => word === props.correctWords[index])
);

// Fonction pour gérer les mots déposés
function handleWordDrop(word, index) {
  if (props.correctWords[index] === word) {
    completedText.value[index] = word;
    return true; // Indique que le mot est correct
  }
  return false; // Indique que le mot est incorrect
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    // Met à jour l'état pour montrer que le code a été copié
    copyButtonText.value = 'Code copié !';
    copyButtonIcon.value = '✅';
    // Réinitialise après 2 secondes
    setTimeout(() => {
      copyButtonText.value = 'Copier le code';
      copyButtonIcon.value = null;
    }, 2000);
  } catch (error) {
    console.error('Échec de la copie :', error);
  }
}

watch(isComplete, () => {
  addSessionResponse(props.currentIndex, completedText.value);
});

onBeforeMount(() => {
  initSessionResponse();
})

onMounted(() => {
  if (sessionResponse.value?.[props.currentIndex]) {
    ([...sessionResponse.value?.[props.currentIndex]] || []).forEach((r, idx) => {
      if (r !== "") completedText.value[idx] = r;
    })
  }
})
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
            :defaultValue="completedText?.[idx]"
          />
        </span>
      </p>

      <!-- Afficher l'exemple de code si toutes les réponses sont correctes -->
      <div
        v-if="isComplete"
        class="mt-6 w-10/12 p-4 border border-green-400 rounded bg-green-50 self-center"
      >
        <h2 class="text-xl font-bold text-center text-green-600">Bravo !</h2>
        <p class="text-center">Voici un exemple de code que vous pouvez tester :</p>
        <pre class="bg-gray-200 p-4 rounded text-sm overflow-x-auto language-html">
        	<code>{{ exampleCode }}</code>
      	</pre>
        <!-- Ajout d'un bouton pour tester le code -->
        <div class="text-center mt-4">
          <button
            @click="copyToClipboard(exampleCode)"
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            <span>{{ copyButtonText }}</span>
            <span v-if="copyButtonIcon">{{ copyButtonIcon }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inline-block {
  min-width: 50px;
  text-align: center;
}

pre {
  max-height: 200px;
  overflow-y: auto;
}
</style>
