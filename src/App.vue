<template>
  <vContainer class="d-flex justify-center align-center">
    <vBtn v-if="!showTranslator" @click="toggleTranslator" color="primary">
      IP Lookup
    </vBtn>
    <IPTranslator v-if="showTranslator" @close="toggleTranslator" />
  </vContainer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IPTranslator from './components/IPTranslator.vue';

const showTranslator = ref(true);

const toggleTranslator = () => {
  showTranslator.value = !showTranslator.value;
};
</script>
