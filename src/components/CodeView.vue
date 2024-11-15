<template>
    <div class="IDE">
        <div class="editor">
            <Monaco />
        </div>
        <div v-html="codeData.htmlCss"></div>
    </div>
</template>
<script setup>
import Monaco from '@/components/Monaco.vue';
import usecodeDataStore from "@/stores/codeData.js";

const codeData = usecodeDataStore();

</script>
<style scoped>
.IDE {
    display: flex;
    flex-direction: row;
}
.editor {
    width: 50%;
}
</style>