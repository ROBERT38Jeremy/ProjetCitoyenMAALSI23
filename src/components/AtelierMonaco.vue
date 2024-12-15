<template>
  <div class="flex flex-col w-5/12">
    <div class="flex">
      <ButtonCustom @click="selectHTML" :actif="!isCssActif" text="HTML" />
      <ButtonCustom @click="selectCss" :actif="isCssActif" text="CSS" />
    </div>
    <div id="editor"></div>
  </div>
  <div class="flex flex-col w-5/12">
    <h3 class="actif rounded-t-md">Affichage HTML/CSS</h3>

    <slot></slot>
  </div>
</template>

<script setup>
/** Monaco
 * https://microsoft.github.io/monaco-editor/
 * doc
 * https://microsoft.github.io/monaco-editor/docs.html
 */
import { createEditor, createModel } from '@/composables/monaco-config.js';
import { onBeforeMount, onMounted, ref } from 'vue';
import usecodeDataStore from '@/stores/codeData.js';
import ButtonCustom from '@/components/ButtonCustom.vue';
import { useSessionDatas } from '@/stores/SessionDatas';
import { storeToRefs } from 'pinia';

const { initSessionCode, saveSessionCode } = useSessionDatas();
const { sessionCode } = storeToRefs(useSessionDatas());
const codeData = usecodeDataStore();


let editor;

let modelList = [];
let isCssActif = ref(false);

const languageSelected = ref('html');

function newModel({ data, language }) {
  // Créer un nouveau modèle avec le language choisi et le contenu correspondant
  const model = createModel(data, language);
  modelList.push({ language, model });
  return model;
}

function selectModel({ data = '', language }) {
  languageSelected.value = language;
  isCssActif.value = language === 'css' ? true : false;
  console.log({ isCssActif: isCssActif.value });

  const modelSelected = modelList.find((model) => model.language === language);
  if (modelSelected) return editor.setModel(modelSelected.model);

  const model = newModel({ data, language });

  // Remplacer le modèle actuel par le nouveau
  editor.setModel(model);
}

const selectHTML = () => {
  selectModel({ data: codeData.atelierHtml, language: 'html' });
};
const selectCss = () => {
  selectModel({ data: codeData.atelierCss, language: 'css' });
};

function updateCode({ data, language }) {
  saveSessionCode(language, data)

  if (language === 'html') return codeData.updateAtelierHtmlDataValue(data);
  return codeData.updateAtelierCssDataValue(data);
}

onMounted(() => {
  editor = createEditor(document.getElementById('editor'), {
    language: languageSelected.value,
  });

  selectModel({ data: codeData.atelierHtml, language: 'html' });

  editor.onDidChangeModelContent((event) => {
    // getValue() = Obtenir le texte actuel dans l'éditeur
    updateCode({ data: editor.getValue(), language: languageSelected.value });
  });
});

onBeforeMount(() => {
  initSessionCode()

  if (sessionCode.value.html) codeData.updateAtelierHtmlDataValue(sessionCode.value.html);
  if (sessionCode.value.css) codeData.updateAtelierCssDataValue(sessionCode.value.css);

})
</script>
<style scoped>
#editor {
  width: 100%;
  height: 100%;
  min-height: 400px;
}

.actif {
  background-color: hsla(160, 100%, 37%, 0.2);
}

h3 {
  padding: 0.7em 0;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  padding: 0.7em 1em;
  border: none;
  width: fit-content;
}
</style>
