<template>
  <div>
    <Header />
    <div class="text-center py-20 bg-gray-100">
      <h1 class="text-5xl font-bold mb-4">Selamat Datang di PuisiApp</h1>
      <p class="text-xl text-gray-700 mb-8">Temukan dan nikmati kumpulan puisi terbaik dari berbagai penulis.</p>
      <router-link to="/poems" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Mulai Baca</router-link>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Navbar.vue';
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika perlu */
</style>
