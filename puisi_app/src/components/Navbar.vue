<template>
  <nav class="bg-blue-600 p-4">
    <div class="max-w-7xl mx-auto flex justify-between items-center">
      <div class="text-white text-lg font-bold flex items-center">
        <img src="@/assets/log.png" alt="Logo" class="h-8 w-8 mr-2">
        PuisiApp
      </div>
      <div class="hidden md:flex space-x-4 items-center">
        <router-link to="/" class="text-white hover:text-gray-200" exact>Home</router-link>
        <router-link to="/poems" class="text-white hover:text-gray-200">Kumpulan Puisi</router-link>
        <router-link to="/about" class="text-white hover:text-gray-200">Tentang</router-link>
        <router-link to="/contact" class="text-white hover:text-gray-200">Kontak</router-link>
      </div>
      <button @click="toggleMenu" class="md:hidden text-white focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <div :class="{'block': isOpen, 'hidden': !isOpen}" class="md:hidden">
      <router-link to="/" class="block text-white px-2 py-1 hover:bg-blue-700" @click="toggleMenu">Home</router-link>
      <router-link to="/poems" class="block text-white px-2 py-1 hover:bg-blue-700" @click="toggleMenu">Kumpulan Puisi</router-link>
      <router-link to="/about" class="block text-white px-2 py-1 hover:bg-blue-700" @click="toggleMenu">Tentang</router-link>
      <router-link to="/contact" class="block text-white px-2 py-1 hover:bg-blue-700" @click="toggleMenu">Kontak</router-link>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
/* Menambahkan gaya hover dan transisi untuk link navbar */
.router-link-active {
  border-bottom: 2px solid white;
}

.router-link-exact-active {
  font-weight: bold;
}
</style>
