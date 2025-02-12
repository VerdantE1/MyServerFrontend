<script>
  import {ref} from  'vue'
  import {toRefs} from "vue";

  export default {
    name: 'Person',
  }
</script>

<script setup>
import {reactive, toRef} from "vue";
  let person_reactive = reactive({
    name:'张三',
    age:18
  });
  let person_origin = {
    name:'张三',
    age:18
  };
  let person_ref = ref({
    name:'张三',
    age:18
  });
  console.log(person_reactive);
  console.log(person_origin);
  console.log(person_ref);
  console.log(toRefs(person_reactive));



</script>

<template>
<!--  <div class="person">{{person.age}}</div>-->
</template>

<style scoped>


</style>



<style src="../styles/font.css"></style>
<style src="../styles/button.css"></style>/
