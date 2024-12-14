<script setup>
import { onBeforeMount } from 'vue';
import { style } from '@/data/exerciceStyle'
import { html } from '@/data/execriceHtml';
import usecodeDataStore from '@/stores/codeData.js';
import CodeView from '@/components/CodeView.vue';

const { updateCssDataValue, updateHtmlDataValue } = usecodeDataStore();

onBeforeMount(() => {
	updateCssDataValue(style);
	updateHtmlDataValue(html);
})
</script>

<template>
	<CodeView />
</template>

<style scoped></style>
