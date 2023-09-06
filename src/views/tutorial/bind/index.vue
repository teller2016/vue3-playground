<template>
  <div>
    <h1>bind</h1>

    <!-- v-bind: 혹은 : 이용 -->
    <div v-bind:id="dynamicId">다이나믹 ID</div>
    <div :class="dynamicClass">다이나믹 CLASS</div>
    <div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dynamicId = ref("id");
const dynamicClass = ref("class");
</script>

<style>
</style>