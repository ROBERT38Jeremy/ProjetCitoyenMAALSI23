import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSessionDatas = defineStore('sessionDatas', () => {
  const sessionResponse = ref({});
  const sessionCode = ref({ html: '', css: '' });

  const initSessionResponse = () => {
    if (localStorage.getItem('response')) sessionResponse.value = JSON.parse(localStorage.getItem("response"));
  }

  const addSessionResponse = (index, currentResponse) => {
    sessionResponse.value[index] = currentResponse;

    setTimeout(saveSessionResponse, 2000);
  }

  const saveSessionResponse = () => {
    if (sessionResponse.value.length <= 0) localStorage.removeItem('response');
    else localStorage.setItem('response', JSON.stringify(sessionResponse.value));
  }

  const initSessionCode = () => {
    if (localStorage.getItem('code')) sessionCode.value = JSON.parse(localStorage.getItem("code"));
  }

  const saveSessionCode = (language, data) => {
    sessionCode.value[language] = data;
    localStorage.setItem('code', JSON.stringify(sessionCode.value));
  }

  return {
    sessionResponse,
    initSessionResponse,
    addSessionResponse,
    saveSessionResponse,

    sessionCode,
    initSessionCode,
    saveSessionCode
  };
})
