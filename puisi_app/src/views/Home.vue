<template>
  <div>
    <!-- Header Section -->
    <header class="text-center py-20 bg-gray-100">
      <h1 class="text-5xl font-bold mb-4">Selamat Datang di PuisiApp</h1>
      <p class="text-xl text-gray-900 mb-8">Temukan dan nikmati kumpulan puisi terbaik dari berbagai penulis.</p>
      <router-link to="/poems" class="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Mulai Baca</router-link>
    </header>

    <!-- Benefits Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12">Manfaat Membaca Puisi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Meningkatkan Keterampilan Bahasa</h3>
            <p class="text-gray-900">Puisi memperkaya kosakata Anda dan membantu memahami struktur bahasa yang lebih dalam. Membaca puisi dapat meningkatkan keterampilan menulis dan berbicara Anda.</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Menumbuhkan Empati dan Pemahaman</h3>
            <p class="text-gray-900">Puisi sering kali menyentuh berbagai pengalaman manusia, membantu Anda memahami perspektif dan perasaan orang lain. Ini dapat menumbuhkan rasa empati dan keterhubungan.</p>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Menenangkan Pikiran dan Emosi</h3>
            <p class="text-gray-900">Membaca puisi dapat memberikan pelarian dari kehidupan sehari-hari dan menenangkan pikiran. Puisi sering kali menghadirkan ketenangan dan refleksi yang mendalam.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section class="py-20 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12">Apa yang Kami Tawarkan?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4 text-center">Koleksi Puisi Terbaik</h3>
            <p class="text-gray-900 text-justify">Kami menyediakan berbagai puisi dari penulis terkenal dan penulis baru yang menjanjikan. Setiap puisi dipilih dengan cermat untuk memberikan pengalaman membaca yang luar biasa.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Antarmuka yang Ramah Pengguna</h3>
            <p class="text-gray-900 text-justify">PuisiApp dirancang untuk memberikan pengalaman membaca yang nyaman dengan antarmuka yang intuitif. Navigasi yang mudah membuat pencarian puisi favorit Anda menjadi lebih menyenangkan.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-bold mb-4">Komunitas Pecinta Puisi</h3>
            <p class="text-gray-900 text-justify">Bergabunglah dengan komunitas kami untuk berdiskusi tentang puisi, berbagi rekomendasi, dan terhubung dengan orang-orang yang memiliki minat yang sama.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12">Apa Kata Mereka?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p class="text-gray-900 mb-4">"PuisiApp adalah tempat terbaik untuk menemukan puisi yang menginspirasi."</p>
            <h3 class="text-xl font-bold">- John Doe</h3>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p class="text-gray-900 mb-4">"Saya sangat menikmati setiap puisi yang saya baca di sini."</p>
            <h3 class="text-xl font-bold">- Jane Smith</h3>
          </div>
          <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p class="text-gray-900 mb-4">"Koleksi puisinya sangat beragam dan menarik."</p>
            <h3 class="text-xl font-bold">- Michael Johnson</h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika perlu */
</style>
