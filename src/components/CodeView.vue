<script setup>
import Monaco from '@/components/Monaco.vue';
import usecodeDataStore from '@/stores/codeData.js';

const codeData = usecodeDataStore();
</script>

<template>
  <h2 class="text-center font-bold text-2xl underline my-4">Bac à sable</h2>
  <div class="flex w-full justify-center content-center">
    <Monaco>
      <div
        v-html="codeData.htmlCss"
        class="border border-black w-full h-full overflow-auto"
      ></div>
    </Monaco>
  </div>
</template>
