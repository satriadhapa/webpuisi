<template>
  <div class="flex flex-wrap gap-4 justify-center">
    <PoemItem v-for="poem in poems" :key="poem.id" :poem="poem" />
  </div>
</template>

<script setup>
import PoemItem from './PoemItem.vue';
import gambar1 from '@/assets/poto1.jpg';

const poems = [
  {
    id: 1,
    title: "Puisi Keluarga",
    content: "Di sinilah tempat kita berbagi cerita...",
    imageUrl: gambar1
  },
  { 
    id: 2,
    title: "Puisi Persahabatan",
    content: "Sahabat sejati adalah cermin diri...",
    imageUrl: gambar1
  },
  {
    id: 3,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: gambar1
  },
];
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika perlu */
</style>
