<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app-body">
    <RouterView/>
  </div>
</template>

<style>
*{
  box-sizing: border-box !important;
}
html, body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin:0;
}
#app{
  width: 100%;
  height: 100%;
}
.app-body{
  width: 100%;
  height: 100%;
}
h1{
  margin: 0;
  padding: 0;
}
</style>
