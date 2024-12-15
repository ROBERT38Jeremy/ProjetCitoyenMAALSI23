<script setup>
import { style } from '@/data/correctionStyle';
import { html } from '@/data/correctionHtml';
</script>

<template>
  <h1>CSS</h1>
  <pre>{{ style }}</pre>

  <h1>HTML</h1>
  <pre>{{ html }}</pre>
</template>

<style scoped>
h1 {
  font-size: large;
  font-weight: bold;
  margin-bottom:  1.5em;
}
</style>