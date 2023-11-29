<template>
    <div>
      <h1>Provide, Inject</h1>

      <button @click="changeMessage">메시지수정</button>

      <hr>
  
      <inject/>
    </div>
  </template>
  
  <script setup>
  import { ref, provide } from "vue";
  import inject from "./inject.vue";

  const refMessage = ref('Ref 메시지입니다!')
  provide('message', '안녕!');
  provide('refMessage', refMessage);

  const changeMessage = () => {
    refMessage.value = '수정된 Ref 메시지';
  }

  // 반응형
  const location = ref('북극');
  const updateLocation = () => {
    location.value = '남극';
  };

  provide('location', {location, updateLocation});

  </script>
  
  <style>
  </style>