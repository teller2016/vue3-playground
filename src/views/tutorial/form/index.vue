<template>
    <div>
      <h1>Form 바인드</h1>
  
      <p>메시지: {{ message }}</p>
      <input v-model="message">
        <hr>

      <div>체크된 이름: {{ checkedNames }}</div>

        <input type="checkbox" id="jack" value="젝" v-model="checkedNames">
        <label for="jack">젝</label>

        <input type="checkbox" id="john" value="존" v-model="checkedNames">
        <label for="john">존</label>

        <input type="checkbox" id="mike" value="마이크" v-model="checkedNames">
        <label for="mike">마이크</label>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const message = ref('');

  const checkedNames = ref([]);
  </script>
  
  <style>
  </style>