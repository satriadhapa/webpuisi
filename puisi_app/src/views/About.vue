<template>
  <div class="container mx-auto p-6">
    <!-- Header Section -->
    <div class="text-center animate__animated animate__fadeIn">
      <h1 class="text-4xl font-bold mb-4">Profil Ai Mulyati</h1>
      <p class="text-lg text-gray-700 mb-6">Saya merupakan seseorang yang berdedikasi untuk memberikan yang terbaik dalam segala hal yang saya lakukan.</p>
    </div>

    <!-- Profile Section -->
    <div class="flex flex-col md:flex-row items-center md:items-start md:justify-between">
      <!-- Profile Image -->
      <div class="w-full md:w-1/3 mb-6 md:mb-0 animate__animated animate__fadeInLeft">
        <img src="@/assets/profil.jpg" alt="Profile Image" class="rounded-full shadow-lg mx-auto md:mx-0">
      </div>

      <!-- Profile Info -->
      <div class="w-full md:w-2/3 md:pl-6 animate__animated animate__fadeInRight">
        <h2 class="text-2xl font-semibold mb-4">Ai Mulyati, S.Pd.</h2>
        <p class="text-gray-700 mb-4">Saya seorang guru Bahasa Indonesia</p>
        <p class="text-gray-700 mb-4">Keahlian saya meliputi:</p>
        <ul class="list-disc list-inside mb-4 text-gray-700">
          <li>Bahasa Indonesia</li>
          <li>Menulis Puisi</li>
          <li>Mengajar</li>
        </ul>
        <p class="text-gray-700 mb-4">Untuk informasi lebih lanjut, Anda dapat menghubungi saya melalui:</p>
        <ul class="list-none">
          <li class="mb-2 flex items-center">
            <font-awesome-icon :icon="['fas', 'envelope']" class="text-blue-500 mr-2"/>
            <strong>Email:</strong>
            <a href="mailto:aimulyati@example.com" class="text-blue-500 hover:underline ml-1">aimulyati00@gmail.com</a>
          </li>
          <li class="mb-2 flex items-center">
            <font-awesome-icon :icon="['fab', 'linkedin']" class="text-blue-500 mr-2"/>
            <strong>LinkedIn:</strong>
            <a href="https://www.linkedin.com/in/ai-mulyati-606698299/" class="text-blue-500 hover:underline ml-1" target="_blank">aimulyati</a>
          </li>
          <li class="mb-2 flex items-center">
            <strong>No Telepon: +62 857-9879-9479</strong>
            
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 800px;
}
</style>
