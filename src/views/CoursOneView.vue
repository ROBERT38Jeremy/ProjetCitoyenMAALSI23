<script setup>
import { ref, onMounted } from 'vue';
import FillInText from '@/components/FillInText.vue';
import { data } from '@/data/textData';
import CodeView from '@/components/CodeView.vue'; 

const currentIndex = ref(0);
const textData = ref([]);

// Navigation entre les textes
function nextText() {
  if (currentIndex.value < textData.value.length - 1) currentIndex.value++;
}

function previousText() {
  if (currentIndex.value > 0) currentIndex.value--;
}

onMounted(() => (textData.value = data));
</script>

<template>
  <div>
    <FillInText
      v-if="textData.length > 0"
      :key="currentIndex"
      :title="textData[currentIndex].title"
      :text="textData[currentIndex].text"
      :words="textData[currentIndex].words"
      :correctWords="textData[currentIndex].correctWords"
    />
    <div class="flex flex-col justify-center items-center w-full">
      <div class="flex justify-end mt-3 w-10/12">
        <button
          @click="previousText"
          :disabled="currentIndex === 0"
          class="border border-black rounded-full text-2xl px-2 m-1"
        >
          <
        </button>
        <button
          @click="nextText"
          :disabled="currentIndex === textData.length - 1"
          class="border border-black rounded-full text-2xl px-2 m-1"
        >
          >
        </button>
      </div>
    </div>
    <CodeView />
  </div>
</template>
