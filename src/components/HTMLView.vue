<template>
    <div class="IDE">
        <div class="editor">
            <Monaco />
        </div>
        <div v-html="htmlData.htmlCss"></div>
    </div>
</template>
<script setup>
import Monaco from '@/components/Monaco.vue';
import usehtmlDataStore from "@/stores/htmlData.js";

const htmlData = usehtmlDataStore();

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