<template>
  <div>
    <h1>bind</h1>

    <h2>basic bind</h2>
    <!-- v-bind: 혹은 : 이용 -->
    <div v-bind:id="dynamicId">다이나믹 ID</div>
    <div :class="dynamicClass">다이나믹 CLASS</div>

    <hr>
    <h2>폼 양방향 바인딩</h2>
    <input
      type="text"
      v-model="inputValue"
    >
    <p>inputValue: {{inputValue}}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dynamicId = ref("id");
const dynamicClass = ref("class");

const inputValue = ref(1);
</script>

<style>
</style>