<template>
  <div class="glassmorphism-card">
    <div class="glassmorphism-card-img total-center">
      <img src="../../assets/vector1.png" alt="">
    </div>
    <div class="glassmorphism-card-texts total-center column-direction items-left">
      <p class="card-title mb-sm">Titulo</p>
      <p class="card-subtitle mb-sm">Subtitulo</p>
      <div class="progress-bar">
        <div class="progress-line"></div>
      </div>
    </div>
    <div class="glassmorphism-card-percentaje total-center">
      <h3>25%</h3>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
p{
  margin: 0;
  padding: 0;
}
.glassmorphism-card{
  width: 100%;
  height: 127px;
  background: linear-gradient(91.91deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.4) 100.82%);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
}
.glassmorphism-card .glassmorphism-card-img{
  height: 100%;
  width: 25%;
}
.glassmorphism-card .glassmorphism-card-texts{
  height: 100%;
  width: 50%;
}
.card-title{
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: #3D5AA2;
}
.card-subtitle{
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #3D5AA2;
  margin-bottom: 12px;
}
.glassmorphism-card-texts .progress-bar{
  height: 24px;
  width: 100%;
  background: rgba(129, 149, 146, 0.6);
  border-radius: 30px 30px 30px 30px;
}
.progress-line{
  width: 50%;
  height: 100%;
  background: linear-gradient(226.29deg, rgba(59, 226, 205, 0.6) -0.17%, rgba(51, 175, 212, 0.6) 93.89%);
  border-radius: 30px 30px 30px 30px;
}
.glassmorphism-card .glassmorphism-card-percentaje{
  margin-top: 4px;
  height: 100%;
  width: 25%;
  text-align: center;
  background: linear-gradient(103.19deg, #3BE2CD 12.12%, #5D7CC9 102.42%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  text-align: right;

}
</style>
