<template>
    <div class="p-4 border-b">
      <h2 class="text-2xl font-bold">{{ poem.title }}</h2>
      <p class="text-gray-700">{{ poem.content }}</p>
    </div>
  </template>
  
  <script setup>
  defineProps({
    poem: Object
  });
  </script>
  
  <style scoped>
  /* Tambahkan gaya khusus di sini jika perlu */
  </style>
  