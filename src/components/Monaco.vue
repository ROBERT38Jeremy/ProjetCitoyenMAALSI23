<template>
    <div id="editor">
    </div>
</template>

<script setup>
import { createEditor } from "@/composables/monaco-config.js"
import { onMounted } from "vue";

let editor;

onMounted(() => {
    editor = createEditor(document.getElementById('editor'), { language: 'html'})
})
</script>
<style>
#editor {
    width: 100%;
    height: 100%;
}

</style>