<template>
  <div>
    <h1>Life Cycle + 템플릿 참조</h1>

    <p ref="p">HI</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const p = ref(null);

onMounted(() => {
  console.log(p);
  p.value.textContent = "p template Mounted!!";
});
</script>

<style>
</style>