<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <router-view class="flex-grow" />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Tambahkan gaya global di sini jika perlu */
</style>
