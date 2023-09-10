<template>
  <div>
    <h1>컴포넌트, Props, Emits, Slot</h1>

    <child-component
      :msg="greeting"
      @change-msg="changeMsg"
    >
      여기는 슬롯 영역입니다
    </child-component>
  </div>
</template>

<script setup>
import childComponent from "./childComponent.vue";
import { ref } from "vue";

const greeting = ref("나는 Props입니다");

const changeMsg = (msg) => {
  console.log(msg);
  greeting.value = msg;
};
</script>

<style>
</style>