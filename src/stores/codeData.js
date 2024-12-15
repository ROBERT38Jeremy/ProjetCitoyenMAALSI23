import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import { style } from '@/data/exerciceStyle';
import { html } from '@/data/execriceHtml';

const usecodeDataStore = defineStore('codeData', () => {
  const atelierCss = ref(style);
  const atelierHtml = ref(html);
  const cssDataValue = ref('');
  const codeHtmlValue = ref('');
  const htmlCss = computed(() => {
    return `
    <div class=scoped>
      ${codeHtmlValue.value}
    <div>
    <style>
      .scoped {
        * {
          all: revert;
        }
        ${cssDataValue.value}
      }
    </style>`;
  });
  const atelierHtmlCss = computed(() => {
    return `
    <div class=scoped>
      ${atelierHtml.value}
    <div>
    <style>
      .scoped {
        * {
          all: revert;
        }
        ${atelierCss.value}
      }
    </style>`;
  });

  function updateCssDataValue(value) {
    cssDataValue.value = value;
  }

  function updateHtmlDataValue(value) {
    codeHtmlValue.value = value;
  }

  function updateAtelierCssDataValue(value) {
    atelierCss.value = value;
  }

  function updateAtelierHtmlDataValue(value) {
    atelierHtml.value = value;
  }

  function resetData() {
    codeHtmlValue.value = '';
		cssDataValue.value = '';
  }

  return {
    cssDataValue,
    codeHtmlValue,
    htmlCss,
    updateCssDataValue,
    updateHtmlDataValue,
    resetData,
    atelierCss,
    atelierHtml,
    updateAtelierCssDataValue,
    updateAtelierHtmlDataValue,
    atelierHtmlCss
  };
});

export default usecodeDataStore;
