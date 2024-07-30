<template>
    <nav class="bg-blue-600 p-4">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="text-white text-lg font-bold flex items-center">
          <img src="@/assets/log.png" alt="Logo" class="h-8 w-8 mr-2">
          PuisiApp
        </div>
        <div class="flex space-x-4 items-center">
          <router-link to="/" class="text-white hover:text-gray-200">Home</router-link>
          <router-link to="/poems" class="text-white hover:text-gray-200">Kumpulan Puisi</router-link>
          <div class="relative group">
            <button class="text-white hover:text-gray-200">Lainnya</button>
            <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
              <router-link to="/about" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Tentang</router-link>
              <router-link to="/contact" class="block px-4 py-2 text-gray-800 hover:bg-gray-200">Kontak</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  nav div.relative:hover div.hidden {
    display: block;
  }
  </style>
  