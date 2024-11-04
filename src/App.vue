<script setup lang="ts">
import { useDropZone } from '@vueuse/core';
import { ref } from 'vue';

const dropZoneRef = ref<HTMLDivElement>();

function onDrop(files: File[] | null) {
  // called when files are dropped on zone
}

const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  // specify the types of data to be received.
  dataTypes: ['image/jpeg'],
  // control multi-file drop
  multiple: true,
  // whether to prevent default behavior for unhandled events
  preventDefaultForUnhandled: false,
});
</script>

<template>
  <div>
    <p>
      The HTML <code>&lt;p&gt;</code> element defines a paragraph. A
      <span ref="dropZoneRef" class="border border-slate-400 rounded"></span>
      paragraph always starts on a new line, and browsers automatically add some white
      space (a margin) before and after a paragraph.
    </p>
  </div>
</template>
