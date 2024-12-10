import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSessionDatas = defineStore('sessionDatas', () => {
  const sessionResponse = ref({});

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

  return { sessionResponse, initSessionResponse, addSessionResponse, saveSessionResponse };
})
