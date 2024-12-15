<script setup>
import { onBeforeMount, onUnmounted } from 'vue';
import { style } from '@/data/exerciceStyle';
import { html } from '@/data/execriceHtml';
import usecodeDataStore from '@/stores/codeData.js';
import CodeView from '@/components/CodeView.vue';

const { updateCssDataValue, updateHtmlDataValue, resetData } = usecodeDataStore();

onBeforeMount(() => {
  updateCssDataValue(style);
  updateHtmlDataValue(html);
});

onUnmounted(() => {
  resetData();
});
</script>

<template>
  <div class="flex justify-center my-3">
    <img src="/public/card_example.png" alt="" srcset="" />
  </div>

  <CodeView />
</template>

<style scoped></style>
