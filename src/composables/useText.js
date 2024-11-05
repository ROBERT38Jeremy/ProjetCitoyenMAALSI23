import { ref } from 'vue';

export function useText(text) {
  const getTextPartsAndIndex = (text) => {
    const regex = /{(\d+)}/g;
    const numbers = ref([]);
    const textParts = ref(text.split(regex).filter((_, index) => index % 2 === 0));

    let match;
    while ((match = regex.exec(text)) !== null) {
      numbers.value.push(parseInt(match[1], 10));
    }
    return { textParts, numbers };
  };

  return {
    getTextPartsAndIndex,
  };
}
