import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const usecodeDataStore = defineStore('codeData', () => {
  const cssDataValue = ref('');
  const codeHtmlValue = ref('');
  const htmlCss = computed(() => {
    return `${codeHtmlValue.value}<style scoped>${cssDataValue.value}</style>`
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
