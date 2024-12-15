<script setup>
import AtelierCodeView from '@/components/AtelierCodeView.vue';
import { useSessionDatas } from '@/stores/SessionDatas';
import { onBeforeMount } from 'vue';

const { initSessionCode } = useSessionDatas();

onBeforeMount(() => {
  initSessionCode()
})
</script>

<template>
  <div class="flex justify-center my-3">
    <img src="/card_example.png" alt="" srcset="" />
  </div>

  <AtelierCodeView />
</template>

<style scoped></style>
