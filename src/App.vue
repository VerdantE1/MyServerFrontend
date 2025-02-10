<script setup>
  import Navbar from './components/Navbar.vue'
  import Person from './components/Person.vue'
</script>

<template>
  <div class="app">
    <h1>Hello World!</h1>
    <Navbar/>
  </div>

  <Person/>


</template>

<style scoped>
  .app{
    background: #ddd;
    box-shadow:0 0 20px;
    border-radius:10px;
    padding: 20px;
  }
</style>