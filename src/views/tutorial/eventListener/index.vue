<template>
  <div>
    <h1>EventListener</h1>

    <button v-on:click="increament">v-on:click {{count}}</button>
    <button @:click="increament">@:click {{count}}</button>

    <input @keyup.enter="onEnter">
  </div>
</template>
  
  <script setup>
import { ref } from "vue";

const count = ref(0);

function increament() {
  count.value += 1;
}

const onEnter = (e) => {
  console.log(e);

};
</script>
  
  <style>
</style>