<script setup>
  import Navbar from './components/Navbar.vue'
  import useMouseEffect from "@/hooks/useMouseEffect.js";
  import '@/styles/animations.css'
  import '@/styles/mouse.css'

  const {mouseX,mouseY,trails,explosions} = useMouseEffect()  // 此时已经可以在内存中索引mouseX,mouseY了
</script>

<template>
  <div class="app">
    <h1>Hello World!</h1>
    <Navbar/>
  </div>



  <!-- Mouse -->
  <div
      class="custom-cursor"
      :style="{ left: mouseX + 'px', top: mouseY + 'px' }"
  >

  </div>

  <!-- 残影 -->
  <div
      v-for="trail in trails"
      :key="trail.id"
      class="trail"
      :style="{ left: trail.x + 'px', top: trail.y + 'px' }"
  ></div>

  <!-- 点击爆炸特效 -->
  <div
      v-for="explosion in explosions"
      :key="explosion.id"
      class="explosion"
      :style="{ left: explosion.x + 'px', top: explosion.y + 'px' }"
  ></div>


  <div class="app">
    <h1>鼠标位置</h1>
    <p>X:{{mouseX}}</p>
    <p>Y:{{mouseY}}</p>
  </div>





</template>

<style scoped>


  .app{
    background: #ddd;
    box-shadow:0 0 20px;
    border-radius:10px;
    padding: 20px;
    width: 100%;
    cursor:none
  }


</style>