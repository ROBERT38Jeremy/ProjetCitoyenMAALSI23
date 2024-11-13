import { ref } from 'vue'
import { defineStore } from 'pinia'

const usehtmlDataStore = defineStore('htmlData', () => {
  const htmlDataValue = ref('')

  function updatehtmlDataValue(value) {
    htmlDataValue.value = value;
  }

  return { htmlDataValue, updatehtmlDataValue }
})

export default usehtmlDataStore;
