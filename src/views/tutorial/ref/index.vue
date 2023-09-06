<template>
  <div>
    <h1>ref, reactive</h1>

    <div>{{name}}</div>
    <div>{{counter.count}}</div>

    <div><button @click="onClick">변환</button></div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const name = ref("molly");

const counter = reactive({
  count: 0,
});

const onClick = () => {
  counter.count += 1;
  name.value = "molly" + counter.count;
};
</script>

<style>
</style>