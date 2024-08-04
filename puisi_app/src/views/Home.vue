<template>
  <div>
    <!-- Header Section -->
    <header class="text-center py-20 bg-blue-800 text-white">
      <h1 class="text-5xl font-bold mb-4">Selamat Datang di Kupus (Kumpulan Puisi)</h1>
      <p class="text-xl mb-8">Temukan dan nikmati kumpulan puisi terbaik dari berbagai penulis.</p>
      <router-link to="/poems" class="bg-yellow-400 text-blue-800 py-2 px-4 rounded hover:bg-yellow-300 m-1">Puisi Pretest</router-link>
      <router-link to="/poems2" class="bg-yellow-400 text-blue-800 py-2 px-4 rounded hover:bg-yellow-300">Puisi Posttest</router-link>
    </header>

    <!-- Benefits Section -->
    <section class="py-20 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">Manfaat Membaca Puisi</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 class="text-2xl font-bold mb-4 text-blue-800 text-center">Meningkatkan Keterampilan Bahasa</h3>
            <p class="text-gray-900">Puisi memperkaya kosakata Anda dan membantu memahami struktur bahasa yang lebih dalam. Membaca puisi dapat meningkatkan keterampilan menulis dan berbicara Anda.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 class="text-2xl font-bold mb-4 text-blue-800 text-center">Menumbuhkan Empati dan Pemahaman</h3>
            <p class="text-gray-900">Puisi sering kali menyentuh berbagai pengalaman manusia, membantu Anda memahami perspektif dan perasaan orang lain. Ini dapat menumbuhkan rasa empati dan keterhubungan.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 class="text-2xl font-bold mb-4 text-blue-800 text-center">Menenangkan Pikiran dan Emosi</h3>
            <p class="text-gray-900">Membaca puisi dapat memberikan pelarian dari kehidupan sehari-hari dan menenangkan pikiran. Puisi sering kali menghadirkan ketenangan dan refleksi yang mendalam.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer Section -->
    <section class="py-20 bg-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12 text-blue-800">Apa yang Kami Tawarkan?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 class="text-2xl font-bold mb-4 text-blue-800 text-center">Koleksi Puisi Terbaik</h3>
            <p class="text-gray-900 text-justify">Kami menyediakan berbagai puisi dari penulis terkenal dan penulis baru yang menjanjikan. Setiap puisi dipilih dengan cermat untuk memberikan pengalaman membaca yang luar biasa.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 class="text-2xl font-bold mb-4 text-blue-800 text-center">Antarmuka yang Ramah Pengguna</h3>
            <p class="text-gray-900 text-justify">Kupus dirancang untuk memberikan pengalaman membaca yang nyaman dengan antarmuka yang intuitif. Navigasi yang mudah membuat pencarian puisi favorit Anda menjadi lebih menyenangkan.</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <h3 class="text-2xl font-bold mb-4 text-blue-800 text-center">Komunitas Pecinta Puisi</h3>
            <p class="text-gray-900 text-justify">Bergabunglah dengan komunitas kami untuk berdiskusi tentang puisi, berbagi rekomendasi, dan terhubung dengan orang-orang yang memiliki minat yang sama.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center mb-12 text-gray-900">Apa Kata Mereka?</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <p class="text-gray-900 mb-4 text-center">"Kupus adalah tempat terbaik untuk menemukan puisi yang menginspirasi."</p>
            <h3 class="text-xl font-bold text-blue-800 text-center">- Marwa</h3>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <p class="text-gray-900 mb-4 text-center">"Saya sangat menikmati setiap puisi yang saya baca di sini."</p>
            <h3 class="text-xl font-bold text-blue-800 text-center">- Devina Annabele</h3>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-lg border border-gray-300">
            <p class="text-gray-900 mb-4 text-center">"Koleksi puisinya sangat beragam dan menarik."</p>
            <h3 class="text-xl font-bold text-blue-800 text-center">- Moch Satria Dhapa Hamdani</h3>
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
