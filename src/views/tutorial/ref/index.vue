<template>
  <div>
    <h1>ref, reactive</h1>

    <div>{{name}}</div>
    <div>{{counter.count}}</div>
    <div>{{counter2}}</div>

    <div><button @click="onClick">변환</button></div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const name = ref("molly");

const counter = reactive({
  count: 0,
});

const counter2 = ref(1);

const onClick = () => {
  counter.count += 1;
  name.value = "molly" + counter.count;
  counter2.value += 1;
};
</script>

<style>
</style>