<script setup>
import { ref } from 'vue';
import { useDropZone } from '@vueuse/core';

// Liste des mots à glisser
const words = ['paragraph', 'margin', 'box'];
const dropZoneRefs = ref([]);
const completedText = ref([]);

// Fonction déclenchée lors du drop
function onDrop(word, index) {
  if (words[index] === word) {
    completedText.value[index] = word;
  } else {
    alert('Mauvais mot !');
  }
}

// Créer les zones de drop pour chaque trou
const createDropZones = () => {
  return words.map((word, index) => {
    const dropZoneRef = ref(null);

    useDropZone(dropZoneRef, {
      onDrop(files, event) {
        const data = event.dataTransfer?.getData('text');
        if (data) onDrop(data, index);
      },
      dataTypes: ['text/plain'],
    });

    return dropZoneRef;
  });
};

dropZoneRefs.value = createDropZones();
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full">
    <div
      class="flex flex-col justify-center p-2 mt-3 border border-gray-400 rounded shadow w-10/12"
    >
      <h1 class="text-center font-bold text-4xl underline">Type of container</h1>
      <div class="flex justify-center gap-4 my-4">
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
        The HTML <code class="text-red-500">&lt;p&gt;</code> element defines a
        <span
          :ref="dropZoneRefs[0]"
          class="border-b-2 border-blue-400 rounded w-20 h-6 inline-block"
        >
          {{ completedText[0] || '' }}
        </span>
        . A paragraph always starts on a new line, and browsers automatically add some
        white space (a
        <span
          :ref="dropZoneRefs[1]"
          class="border-b-2 border-blue-400 rounded w-20 h-6 inline-block"
        >
          {{ completedText[1] || '' }}
        </span>
        ) before and after a paragraph.
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
