<template>
  <div>
    <h1>watch</h1>

    <button @click="todoId++">Next Todo</button>
    <p v-if="!todoData">로딩중~</p>
    <p>
      {{ todoData }}
    </p>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";

const todoId = ref(1);
const todoData = ref(null);

async function fetchData() {
  todoData.value = null;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  );
  console.log(res);
  todoData.value = await res.json();
}

onMounted(() => {
  fetchData();
});
watch(todoId, () => {
  fetchData();
});
</script>

<style>
</style>