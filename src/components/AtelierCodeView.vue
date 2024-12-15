<script setup>
import AtelierMonaco from './AtelierMonaco.vue';
import usecodeDataStore from '@/stores/codeData.js';

const codeData = usecodeDataStore();
</script>

<template>
  <div class="flex w-full justify-center content-center">
    <AtelierMonaco>
      <div
        v-html="codeData.atelierHtmlCss"
        class="border border-black w-full h-full overflow-auto"
      ></div>
    </AtelierMonaco>
  </div>
</template>
