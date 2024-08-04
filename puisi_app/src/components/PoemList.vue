<template>
  <div class="flex flex-wrap gap-4 justify-center">
    <PoemItem v-for="poem in poems" :key="poem.id" :poem="poem" />
  </div>
</template>

<script setup>
import PoemItem from './PoemItem.vue';
import pre1 from '@/assets/pretest/1.jpg';
import pre2 from '@/assets/pretest/2.png';
import pre3 from '@/assets/pretest/3.jpg';
import pre4 from '@/assets/pretest/4.jpg';
import pre5 from '@/assets/pretest/5.jpg';
import pre6 from '@/assets/pretest/6.jpg';
import pre7 from '@/assets/pretest/7.jpg';
import pre8 from '@/assets/pretest/8.jpg';
import pre9 from '@/assets/pretest/9.jpg';
import pre10 from '@/assets/pretest/10.jpg';
import pre11 from '@/assets/pretest/11.jpg';
import pre12 from '@/assets/pretest/12.jpg';
import pre13 from '@/assets/pretest/13.jpg';
import pre14 from '@/assets/pretest/14.jpg';
import pre15 from '@/assets/pretest/15.jpg';
import pre16 from '@/assets/pretest/16.jpg';
import pre17 from '@/assets/pretest/17.jpg';
import pre18 from '@/assets/pretest/18.jpg';
import pre19 from '@/assets/pretest/19.jpg';
import pre20 from '@/assets/pretest/20.jpg';
import pre21 from '@/assets/pretest/21.jpg';
import pre22 from '@/assets/pretest/22.jpg';
import pre23 from '@/assets/pretest/23.jpg';
import pre24 from '@/assets/pretest/24.jpg';
import pre25 from '@/assets/pretest/25.jpg';
import pre26 from '@/assets/pretest/26.jpg';
import pre27 from '@/assets/pretest/27.jpg';
import pre28 from '@/assets/pretest/28.jpg';
import pre29 from '@/assets/pretest/29.jpg';
import pre30 from '@/assets/pretest/30.jpg';
import gambar2 from '@/assets/profil.jpg';

const poems = [
  {
    id: 1,
    title: "Keindahan Peternakan",
    content: "Karya Alwi Ajriana Yahya",
    imageUrl: pre1
  },
  { 
    id: 2,
    title: "Pendidikan Dibawah Langit",
    content: "Karya Aulia Yusuf",
    imageUrl: pre2
  },
  {
    id: 3,
    title: "Ruang Kelas",
    content: "Karya Azmi Fitria",
    imageUrl: pre3
  },
  {
    id: 4,
    title: "Hujan Bulan Februari",
    content: "Karya Dara Citra Paramita",
    imageUrl: pre4
  },
  {
    id: 5,
    title: "Bulan Purnama",
    content: "Karya Devi Suryani",
    imageUrl: pre5
  },
  {
    id: 6,
    title: "Bola",
    content: "Karya Faisal Satria Firdaus",
    imageUrl: pre6
  },
  {
    id: 7,
    title: "Pantai",
    content: "Karya Fahsya Faturahman Aprian",
    imageUrl: pre7
  },
  {
    id: 8,
    title: "Senja",
    content: "Karya Indira Putri Hermawan",
    imageUrl: pre8
  },
  {
    id: 9,
    title: "Menunggu",
    content: "Karya Intan Dwi Ayu",
    imageUrl: pre9
  },
  {
    id: 10,
    title: "Ibu",
    content: "Keisya Putri Aprilliani",
    imageUrl: pre10
  },
  {
    id: 11,
    title: "Pulpen",
    content: "Karya M. Rizky Nurahman",
    imageUrl: pre11
  },
  {
    id: 12,
    title: "Ayah",
    content: "Karya Mesa Putri Diandara",
    imageUrl: pre12
  },
  {
    id: 13,
    title: "Sang Pencipta",
    content: "Karya Mochammad Noval R",
    imageUrl: pre13
  },
  {
    id: 14,
    title: "Mengapa",
    content: " Karya Mugi Mugni Fadhillah.",
    imageUrl: pre14
  },
  {
    id: 15,
    title: "Keindahan Alam diwaktu sore",
    content: "Karya Muhammad Ariski",
    imageUrl: pre15
  },
  {
    id: 16,
    title: "Jambu",
    content: "Karya Muhammad Dafa Zat Tamam",
    imageUrl: pre16
  },
  {
    id: 17,
    title: "Ingin Memilikimu",
    content: "Karya Nasyifa Desca Khairisyah",
    imageUrl: pre17
  },
  {
    id: 18,
    title: "Bukuku",
    content: "Karya Ranisya Rahma",
    imageUrl: pre18
  },
  {
    id: 19,
    title: "Bunga",
    content: "Karya Revana Prisilia Lungut S",
    imageUrl: pre19
  },
  {
    id: 20,
    title: "Lautan Cinta Yang Abadi",
    content: "Karya Rezky Akhsan Alhafid",
    imageUrl: pre20
  },
  {
    id: 21,
    title: "Penghapus",
    content: "Karya Rico Januar",
    imageUrl: pre21
  },
  {
    id: 22,
    title: "Sunset pada Sore Hari",
    content: "Karya Septiana Andarista",
    imageUrl: pre22
  },
  {
    id: 23,
    title: "Senja",
    content: "Karya Shafa Aqila N",
    imageUrl: pre23
  },
  {
    id: 24,
    title: "Dicintai",
    content: "Karya Sintia Bela",
    imageUrl: pre24
  },
  {
    id: 25,
    title: "Senjaku",
    content: "Karya Siti Syahra Inayah",
    imageUrl: pre25
  },
  {
    id: 26,
    title: "Senja Sore",
    content: "Karya Syafira Febriani Feyana",
    imageUrl: pre26
  },
  {
    id: 27,
    title: "Sunset",
    content: "Karya Tarisa Regina Putri",
    imageUrl: pre27
  },
  {
    id: 28,
    title: "Cinta Kakel",
    content: "Karya Wilis Wibawa Anggara",
    imageUrl: pre28
  },
  {
    id: 29,
    title: "Bumi Yang Tua",
    content: "Karya Revan Mahaswara C.P",
    imageUrl: pre29
  },
  {
    id: 30,
    title: "Matahari dan Rembulan",
    content: "Karya Iki Firmansyah",
    imageUrl: pre30
  },
]; //Iki Firmansyah
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika perlu */
</style>
