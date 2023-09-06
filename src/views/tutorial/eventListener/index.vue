<template>
  <div>
    <h1>EventListener</h1>

    <button v-on:click="increament">v-on:click {{count}}</button>
    <button @:click="increament">@:click {{count}}</button>
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const count = ref(0);

function increament() {
  count.value += 1;
}
</script>
  
  <style>
</style>