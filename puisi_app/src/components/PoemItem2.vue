<template>
  <div>
    <!-- Poem Detail Section -->
    <section class="bg-gray-100 py-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
          <div class="flex flex-col md:flex-row items-start">
            <!-- Poem Image -->
            <div class="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                v-if="poem.imageUrl"
                :src="poem.imageUrl"
                alt="Gambar Puisi"
                class="w-full h-60 object-cover rounded-md shadow-md cursor-pointer"
                @click="openModal"
              >
              <!-- Modal -->
              <transition name="fade">
                <div v-if="isModalOpen" @click="closeModal" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                  <div class="relative max-w-3xl max-h-3xl">
                    <img :src="poem.imageUrl" alt="Gambar Puisi" class="max-w-67 max-h-67 object-contain cursor-pointer" @click.stop>
                    <button @click="closeModal" class="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
                  </div>
                </div>
              </transition>
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
/* Tambahkan gaya khusus di sini jika perlu */
img {
  border: 1px solid #e2e8f0; /* Border halus untuk gambar */
}

/* Modal styling */
.fixed {
  z-index: 50; 
}

button {
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  line-height: 1;
  cursor: pointer;
}

/* Modal Transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
