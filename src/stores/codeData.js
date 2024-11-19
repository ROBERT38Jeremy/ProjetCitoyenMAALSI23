import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const usecodeDataStore = defineStore('codeData', () => {
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
    </style>`
  })

  function updateCssDataValue(value) {
    cssDataValue.value = value;
  }

  function updateHtmlDataValue(value) {
    codeHtmlValue.value = value;
  }

  return { cssDataValue, codeHtmlValue, htmlCss, updateCssDataValue, updateHtmlDataValue }
})

export default usecodeDataStore;
