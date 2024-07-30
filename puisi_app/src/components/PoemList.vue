<template>
    <div class="max-w-3xl mx-auto py-8">
      <h1 class="text-4xl font-bold text-center mb-8">Kumpulan Puisi</h1>
      <PoemItem v-for="poem in poems" :key="poem.id" :poem="poem" />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import PoemItem from './PoemItem.vue';
  
  const poems = ref([]);
  
  onMounted(() => {
    // Gantilah bagian ini dengan pengambilan data nyata jika ada
    poems.value = [
      { id: 1, title: 'Puisi Pertama', content: 'Ini adalah isi dari puisi pertama.' },
      { id: 2, title: 'Puisi Kedua', content: 'Ini adalah isi dari puisi kedua.' },
      // Tambahkan lebih banyak puisi di sini
    ];
  });
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus di sini jika perlu */
  </style>
  