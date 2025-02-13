<script setup>
  import {useMusicPlayer} from "@/hooks/useMusicPlayer.js";
  const {isPlaying,songName,togglePlayer} = useMusicPlayer();

</script>


<template>
    <div class="inline-flex bg-white p-2 rounded-full shadow-md items-center h-[3rem]">
      <button
        @click="togglePlayer"
        class="w-10 h-10 flex items-center justify-center  text-white rounded-full focus:outline-none
         ease-in-out delay-150 bg-blue-500 hover:scale-125 hover:bg-indigo-500 duration-1000">
        <span v-if="isPlaying">⏸</span>
        <span v-else>▶</span>
      </button>
      <span class="font-bold font-palatino ml-5 transition-all duration-1000 bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent "
      :style="{width:songName.length + 'ch'}">{{ songName }}</span>
    </div>





</template>



