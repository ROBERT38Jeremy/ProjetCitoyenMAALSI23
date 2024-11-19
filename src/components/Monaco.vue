<template>
    <ButtonCustom @click="selectHTML" :actif="!isCssActif" text="HTML" />
    <ButtonCustom @click="selectCss" :actif="isCssActif" text="CSS" />
    <div>
        <div id="editor">
    </div>
    </div>
</template>

<script setup>
/** Monaco
 * https://microsoft.github.io/monaco-editor/
    * doc
    * https://microsoft.github.io/monaco-editor/docs.html
 */
import { createEditor, createModel } from "@/composables/monaco-config.js";
import { onMounted, ref } from "vue";
import usecodeDataStore from "@/stores/codeData.js";
import ButtonCustom from "@/components/ButtonCustom.vue"
const codeData = usecodeDataStore();

let editor;

let modelList = [];
let isCssActif = ref(false);

const languageSelected = ref('html');

function selectModel({ data= '', language }) {
    languageSelected.value = language
    isCssActif.value = language === 'css' ? true : false;
    console.log({ isCssActif: isCssActif.value })

    const modelSelected = modelList.find((model) => model.language === language)
    if(modelSelected) return editor.setModel(modelSelected.model);

      // Créer un nouveau modèle avec le language choisi et le contenu correspondant
      const newModel = createModel(data, language);
      modelList.push({ language, model: newModel})

      // Remplacer le modèle actuel par le nouveau
      editor.setModel(newModel);
    }

    const selectHTML = () => {
        selectModel({ language: "html"})
    }
    const selectCss = () => {
        selectModel({ language: "css" })
    }

    function updateCode({ data, language }) {
        if(language === 'html') return codeData.updateHtmlDataValue(data);
        return codeData.updateCssDataValue(data);
    }

    function setEditorValue(newValue) {
        editor.setValue(newValue)
    }
onMounted(() => {
    editor = createEditor(document.getElementById('editor'), { language: languageSelected.value })

    selectModel({ language: 'html' })

    editor.onDidChangeModelContent((event) => {
    // getValue() = Obtenir le texte actuel dans l'éditeur
    updateCode({ data: editor.getValue(), language: languageSelected.value })
});
})
</script>
<style scoped>
#editor {
    width: 100%;
    height: 100%;
    min-height: 400px;
    margin-bottom: 10px;
}
</style>