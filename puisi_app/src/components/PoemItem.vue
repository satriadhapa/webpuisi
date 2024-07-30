<template>
  <div class="bg-white p-4 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300 max-h-[300px] transform hover:scale-105">
    <!-- Foto Puisi -->
    <div class="relative overflow-hidden rounded-md mb-4">
      <img v-if="poem.imageUrl" :src="poem.imageUrl" alt="Gambar Puisi" 
        @click="openModal" class="w-full h-40 object-cover rounded-md cursor-pointer">
      <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
    </div>

    <!-- Judul dan Konten Puisi -->
    <div>
      <h2 class="text-xl font-bold mb-2 text-gray-900">{{ poem.title }}</h2>
      <p class="text-gray-600 text-sm mb-2">{{ poem.content }}</p>
    </div>

    <!-- Modal -->
    <div v-if="isModalOpen" @click="closeModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <img :src="poem.imageUrl" alt="Gambar Puisi" class="max-w-full max-h-full object-contain cursor-pointer" @click.stop>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  poem: {
    type: Object,
    required: true
  }
});

const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}
</script>

<style scoped>
/* Border halus untuk gambar */
img {
  border-bottom: 1px solid #e2e8f0; /* Menambahkan border bawah pada gambar */
}

/* Gradien untuk overlay gambar */
div.bg-gradient-to-t {
  pointer-events: none; 
}

/* Modal styling */
.fixed {
  z-index: 50; 
}
</style>
