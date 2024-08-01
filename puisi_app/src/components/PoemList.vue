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
    title: "Puisi Keluarga",
    content: "Di sinilah tempat kita berbagi cerita...",
    imageUrl: pre1
  },
  { 
    id: 2,
    title: "Puisi Persahabatan",
    content: "Sahabat sejati adalah cermin diri...",
    imageUrl: pre2
  },
  {
    id: 3,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre3
  },
  {
    id: 4,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre4
  },
  {
    id: 5,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre5
  },
  {
    id: 6,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre6
  },
  {
    id: 7,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre7
  },
  {
    id: 8,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre8
  },
  {
    id: 9,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre9
  },
  {
    id: 10,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre10
  },
  {
    id: 11,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre11
  },
  {
    id: 12,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre12
  },
  {
    id: 13,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre13
  },
  {
    id: 14,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre14
  },
  {
    id: 15,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre15
  },
  {
    id: 16,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre16
  },
  {
    id: 17,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre17
  },
  {
    id: 18,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre18
  },
  {
    id: 19,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre19
  },
  {
    id: 20,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre20
  },
  {
    id: 21,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre21
  },
  {
    id: 22,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre22
  },
  {
    id: 23,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre23
  },
  {
    id: 24,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre24
  },
  {
    id: 25,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre25
  },
  {
    id: 26,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre26
  },
  {
    id: 27,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre27
  },
  {
    id: 28,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre28
  },
  {
    id: 29,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre29
  },
  {
    id: 30,
    title: "Puisi Cinta",
    content: "Cinta yang tulus bagaikan matahari...",
    imageUrl: pre30
  },
];
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika perlu */
</style>
