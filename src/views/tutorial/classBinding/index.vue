<template>
    <div>
      <h1>class binding</h1>
      
      <h2>일반</h2>
      <p :class="{active : isActive}">이건 텍스트</p>
      <button @click="isActive = !isActive">버튼</button>

      <h2>객체로 바인딩</h2>
      <p :class="{active : isActive, bold : isActive}">이건 텍스트</p>

      <h2>배열로 바인딩</h2>
      <p :class="[activeClass, boldClass]">이건 텍스트</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  const isActive = ref(false);

  const activeClass = ref('active');
  const boldClass = ref('bold');
  </script>
  
  <style scoped>
  .active {
    color: red;
  }
  .bold {
    font-weight: bold;
  }
  </style>