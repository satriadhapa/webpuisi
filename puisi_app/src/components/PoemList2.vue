<template>
  <div class="flex flex-wrap gap-4 justify-center">
    <PoemItem v-for="poem in poems2" :key="poem.id" :poem="poem" />
  </div>
</template>

<script setup>
import PoemItem from './PoemItem.vue';
import pos1 from '@/assets/posttest/1.jpg';
import pos2 from '@/assets/posttest/2.jpg';
import pos3 from '@/assets/posttest/3.jpg';
import pos4 from '@/assets/posttest/4.jpg';
import pos5 from '@/assets/posttest/5.jpg';
import pos6 from '@/assets/posttest/6.jpg';
import pos7 from '@/assets/posttest/7.jpg';
import pos8 from '@/assets/posttest/8.jpg';
import pos9 from '@/assets/posttest/9.jpg';
import pos10 from '@/assets/posttest/10.jpg';
import pos11 from '@/assets/posttest/11.jpg';
import pos12 from '@/assets/posttest/12.jpg';
import pos13 from '@/assets/posttest/13.jpg';
import pos14 from '@/assets/posttest/14.jpg';
import pos15 from '@/assets/posttest/15.jpg';
import pos16 from '@/assets/posttest/16.jpg';
import pos17 from '@/assets/posttest/17.jpg';
import pos18 from '@/assets/posttest/18.jpg';
import pos19 from '@/assets/posttest/19.jpg';
import pos20 from '@/assets/posttest/20.jpg';
import pos21 from '@/assets/posttest/21.jpg';
import pos22 from '@/assets/posttest/22.jpg';
import pos23 from '@/assets/posttest/23.jpg';
import pos24 from '@/assets/posttest/24.jpg';
import pos25 from '@/assets/posttest/25.jpg';
import pos26 from '@/assets/posttest/26.jpg';
import pos27 from '@/assets/posttest/27.jpg';
import pos28 from '@/assets/posttest/28.jpg';
import pos29 from '@/assets/posttest/29.jpg';
import pos30 from '@/assets/posttest/30.jpg';

const poems2 = [
  {
    id: 1,
    title: "Cinta Pondok Halimun",
    content: "Karya Alwi Ajriana Yahya",
    imageUrl: pos1
  },
  { 
    id: 2,
    title: "Laut Biru",
    content: "Karya Aulia Yusuf",
    imageUrl: pos2
  },
  {
    id: 3,
    title: "Hutan Indah",
    content: "Karya Azmi Fitria",
    imageUrl: pos3
  },
  {
    id: 4,
    title: "Pantai Yang Kucintai",
    content: "Karya Dara Citra Paramita",
    imageUrl: pos4
  },
  {
    id: 5,
    title: "Hutan",
    content: "Karya Devi Suryani",
    imageUrl: pos5
  },
  {
    id: 6,
    title: "Bumi",
    content: "Karya Faisal Satria Firdaus",
    imageUrl: pos6
  },
  {
    id: 7,
    title: "Cinta Alam Yang menggerakan",
    content: "Karya Fahsya Faturahman Aprian",
    imageUrl: pos7
  },
  {
    id: 8,
    title: "Pesona Cinta Alam",
    content: "Karya Iki Firmansyah",
    imageUrl: pos8
  },
  {
    id: 9,
    title: "Pantai",
    content: "Karya Indira Putri Hermawan",
    imageUrl: pos9
  },
  {
    id: 10,
    title: "Alam Yang Berkata",
    content: "Karya Intan Dwi Ayu",
    imageUrl: pos10
  },
  {
    id: 11,
    title: "Harmoni Cinta Alam",
    content: "Keisya Putri Aprilliani",
    imageUrl: pos11
  },
  {
    id: 12,
    title: "Matahari",
    content: "Karya M. Rizky Nurahman",
    imageUrl: pos12
  },
  {
    id: 13,
    title: "Sinar Mentari",
    content: "Karya Mesa Putri Diandara",
    imageUrl: pos13
  },
  {
    id: 14,
    title: "Tempat Kenangan",
    content: "Karya Mochammad Noval R",
    imageUrl: pos14
  },
  {
    id: 15,
    title: "Indahnya Hutan",
    content: "Karya Mugi Mugni Fadhillah.",
    imageUrl: pos15
  },
  {
    id: 16,
    title: "Keindahan di Sore Hari",
    content: "Karya Muhammad Ariski",
    imageUrl: pos16
  },
  {
    id: 17,
    title: "Cinta Alam",
    content: "Karya Muhammad Dafa Zat Tamam",
    imageUrl: pos17
  },
  {
    id: 18,
    title: "Laut Punya Cerita",
    content: "Karya Nasyifa Desca Khairisyah",
    imageUrl: pos18
  },
  {
    id: 19,
    title: "Rembulan",
    content: "Karya Ranisya Rahma",
    imageUrl: pos19
  },
  {
    id: 20,
    title: "Hutan Hujan",
    content: "Karya Revan Mahaswara C.P",
    imageUrl: pos20
  },
  {
    id: 21,
    title: "Sungaiku",
    content: "Karya Revana Prisilia Lungut S",
    imageUrl: pos21
  },
  {
    id: 22,
    title: "Lautan Yang Melahap Segalanya",
    content: "Karya Rezky Akhsan Alhafid",
    imageUrl: pos22
  },
  {
    id: 23,
    title: "Cinta Pantai",
    content: "Karya Rico Januar",
    imageUrl: pos23
  },
  {
    id: 24,
    title: "Ademnya Perkebunan Teh",
    content: "Karya Septiana Andarista",
    imageUrl: pos24
  },
  {
    id: 25,
    title: "Taman Bungaku",
    content: "Karya Shafa Aqila N",
    imageUrl: pos25
  },
  {
    id: 26,
    title: "Cinta Alam Yang Eterna",
    content: "Karya Sintia Bela",
    imageUrl: pos26
  },
  {
    id: 27,
    title: "Duniaku",
    content: "Karya Siti Syahra Inayah",
    imageUrl: pos27
  },
  {
    id: 28,
    title: "Restu Semesta Kali Ini",
    content: "Karya Syafira Febriani Feyana",
    imageUrl: pos28
  },
  {
    id: 29,
    title: "Hutanku",
    content: "Karya Tarisa Regina Putri",
    imageUrl: pos29
  },
  {
    id: 30,
    title: "Keindahan Di Pagi Hari",
    content: "Karya Wilis Wibawa Anggara",
    imageUrl: pos30
  },
];
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika perlu */
</style>
