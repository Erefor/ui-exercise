<template>
  <div class="glassmorphism-view total-center">
    <div class="right-circle"></div>
    <div class="left-circle"></div>
    <div class="main-container flex">
      <aside class="sidebar total-center column-direction">
        <img src="../assets/perfil1.jpg" alt="" class="user-img">
        <h2 class="user-name">Don Bury</h2>
        <h3 class="user-job">Vue Developer</h3>
        <ul>
          <li v-for="tech in tectsList" :key="tech.text" class="list-item">
            <img :src="tech.img" alt="img" class="list-item-icon">
            <p class="list-item-text">{{tech.text}}</p>
          </li>
        </ul>
      </aside>
      <main>
        <h1 class="section-title">Active Games</h1>
        <input class="search-input" type="text" placeholder="Buscar">
        <GlassmorphismCard class="mt-md" v-for="n in 3" :key="n"></GlassmorphismCard>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import GlassmorphismCard from "@/components/GlassmorphismViewComponents/GlassmorphismCard.vue";
import vector1 from '../assets/vector1.png'
import vector2 from '../assets/vector2.png'
import vector3 from '../assets/vector3.png'
import vector4 from '../assets/vector4.png'
const tectsList = [
  {text: 'Vue', img: vector1},
  {text: 'Docker', img: vector2},
  {text: 'Typescript', img: vector3},
  {text: 'Bash', img: vector4},
]
</script>

<style>
@import "../styles/GlassmorphismViewStyles.css";
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
</style>

