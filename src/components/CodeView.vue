<script setup>
import Monaco from '@/components/Monaco.vue';
import usecodeDataStore from '@/stores/codeData.js';

const codeData = usecodeDataStore();
</script>

<template>
  <div class="flex w-full justify-center content-center">
    <Monaco>
      <div
        v-html="codeData.htmlCss"
        class="border border-black w-full h-full overflow-auto"
      ></div>
    </Monaco>
  </div>
</template>
