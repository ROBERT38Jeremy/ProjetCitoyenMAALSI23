<template>
    <ButtonCustom @click="selectHTML" :actif="!isCssActif" text="HTML" />
    <ButtonCustom @click="selectCss" :actif="isCssActif" text="CSS" />
    <!-- <ButtonCustom @click="updateModelHtmlAndCss({ newCss: 'p { color: red }', newHtml: '<p>a new paragraph in color red</p>' })" :actif="isCssActif" text="Exemple updateModelHtmlAndCss" /> -->
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

function newModel({ data, language }) {
      // Créer un nouveau modèle avec le language choisi et le contenu correspondant
      const model = createModel(data, language);
      modelList.push({ language, model })
      return model
}

function selectModel({ data= '', language }) {
    languageSelected.value = language
    isCssActif.value = language === 'css' ? true : false;
    console.log({ isCssActif: isCssActif.value })

    const modelSelected = modelList.find((model) => model.language === language)
    if(modelSelected) return editor.setModel(modelSelected.model);

    const model = newModel({ data, language })

      // Remplacer le modèle actuel par le nouveau
      editor.setModel(model);
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

    /** No use currently */
    function setCurrentModelValue(newValue) {
        editor.setValue(newValue)
    }
    /** */

    function upsertModel({ data, language }) {
        const modelToUpsert = modelList.find((model) => model.language === language)
        
        if (modelToUpsert) return modelToUpsert.model.setValue(data)
        return newModel({ data, language })
    }

    function updateModelHtmlAndCss({ newCss, newHtml }){
        upsertModel({ data: newCss, language: "css" })
        upsertModel({ data: newHtml, language: "html" })

        codeData.updateCssDataValue(newCss);
        codeData.updateHtmlDataValue(newHtml);
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