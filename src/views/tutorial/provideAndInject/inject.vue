<template>
    <div>
      <h2>Inject할 자식 컴포넌트</h2>
      <div>
        <h3>Inject한 메시지</h3>
        <p>{{ message }}</p>
      </div>

      <hr>

      <div>
        <h3>Inject한 ref 메시지</h3>
        <p>{{ refMessage }}</p>
      </div>

      <hr>

      <div>
        <h3>provide 하지 않은 메시지</h3>
        <p>{{ defaultMessage }}</p>
      </div>

      <hr>
      <div>
        <h3>반응형</h3>
        <button @click="updateLocation">{{ location }}</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { inject } from "vue";
  const message = inject('message');
  const refMessage = inject('refMessage');

  const defaultMessage = inject('defaultMessage', '디폴트메시지');

  // 반응형
  const {location, updateLocation} = inject('location');
  </script>
  
  <style>
  </style>