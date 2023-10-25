<template>
  <div>
    <h1>Rendering</h1>

    <h2>조건부 렌더링</h2>
    <button @click="toggleRender">렌더링 토글</button>
    <p v-if="toggle">true</p>
    <p v-else>false</p>
    <hr>

    <h2>리스트 렌더링</h2>
    <form @submit.prevent="addTodo">
      <input v-model="newTodo">
      <button type="submit">Todo 추가</button>
    </form>
    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        <span>{{ todo.text }}</span>
        <button
          type="button"
          @click="removeTodo(todo)"
        >X</button>
      </li>
    </ul>

    <ul>
      <li v-for="n in 10" :key="n">{{n}}</li>
    </ul>
  </div>
</template>
  
<script setup>
import { ref } from "vue";

const toggle = ref(true);

const toggleRender = () => {
  toggle.value = !toggle.value;
};

let id = 0;
const todos = ref([
  {
    id: ++id,
    text: `todo${id}`,
  },
  {
    id: ++id,
    text: `todo${id}`,
  },
  {
    id: ++id,
    text: `todo${id}`,
  },
]);

const newTodo = ref("");
function addTodo() {
  todos.value.push({
    id: ++id,
    text: newTodo.value,
  });

  newTodo.value = "";
}

function removeTodo(todo) {
  todos.value = todos.value.filter((item) => item.id !== todo.id);
}
</script>
  
<style>
</style>