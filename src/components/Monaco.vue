<template>
    <div id="editor">
    </div>
</template>

<script setup>
import { createEditor } from "@/composables/monaco-config.js";
import { onMounted } from "vue";
import usehtmlDataStore from "@/stores/htmlData.js";

const htmlData = usehtmlDataStore();

let editor;

onMounted(() => {
    editor = createEditor(document.getElementById('editor'), { language: 'html'})

    editor.onDidChangeModelContent((event) => {
    // Obtenir le texte actuel dans l'éditeur
    htmlData.updatehtmlDataValue(editor.getValue());
});
})
</script>
<style>
#editor {
    width: 100%;
    height: 100%;
    min-height: 400px;
}
</style>