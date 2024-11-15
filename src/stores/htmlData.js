import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

const usehtmlDataStore = defineStore('htmlData', () => {
  const cssDataValue = ref('');
  const htmlDataValue = ref('');
  const htmlCss = computed(() => {
    return `${htmlDataValue.value}<style scoped>${cssDataValue.value}</style>`
  })

  function updateCssDataValue(value) {
    cssDataValue.value = value;
  }

  function updatehtmlDataValue(value) {
    htmlDataValue.value = value;
  }

  function getCodeHtmlAndCss() {
    
  }

  return { cssDataValue, htmlDataValue, htmlCss, updateCssDataValue, updatehtmlDataValue }
})

export default usehtmlDataStore;
