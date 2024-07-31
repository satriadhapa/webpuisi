<template>
  <div>        

    <!-- Poem Detail Section -->
    <section class="bg-gray-100 py-20">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
          <div class="flex flex-col md:flex-row items-start">
            <!-- Poem Image -->
            <div class="w-full md:w-1/2 mb-6 md:mb-0">
              <img v-if="poem.imageUrl" :src="poem.imageUrl" alt="Gambar Puisi" class="w-full h-auto rounded-md shadow-md">
            </div>

            <!-- Poem Info -->
            <div class="w-full md:w-1/2 md:pl-8">
              <h2 class="text-3xl font-semibold mb-4 text-blue-800">{{ poem.title }}</h2>
              <p class="text-gray-700 text-lg">{{ poem.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  poem: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika perlu */
header {
  background-color: #1e40af; /* Menyesuaikan warna header */
}

header a {
  transition: background-color 0.3s;
}

header a:hover {
  background-color: #fcd34d; /* Warna tombol saat hover */
}

img {
  border: 1px solid #e2e8f0; /* Border halus untuk gambar */
}
</style>
