import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const usecodeDataStore = defineStore('codeData', () => {
  const cssDataValue = ref('');
  const codeDataValue = ref('');
  const htmlCss = computed(() => {
    return `${codeDataValue.value}<style scoped>${cssDataValue.value}</style>`
  })

  function updateCssDataValue(value) {
    cssDataValue.value = value;
  }

  function updatecodeDataValue(value) {
    codeDataValue.value = value;
  }

  function getCodeHtmlAndCss() {
    
  }

  return { cssDataValue, codeDataValue, htmlCss, updateCssDataValue, updatecodeDataValue }
})

export default usecodeDataStore;
