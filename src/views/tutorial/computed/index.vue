<template>
    <div>
      <h1>computed</h1>
  
      <p>책</p>
      <p>computed가 아닌경우 매번 계산을 한다, 리렌더링이 될때마다 함수를 실행</p>
      <p>{{ author.books.length > 0 ? 'yes' : 'no' }}</p>
      <p>{{ author.books.length > 0 ? 'yes' : 'no' }}</p>

        <hr>
      <p>computed는 캐싱되어 한번만 계산된다</p>
      <p>computed1: {{bookMessage}}</p>
      <p>computed2: {{bookMessage}}</p>


      <hr>
      <p>{{fullName}}</p>
      <button @click="changeFullName">이름변경</button>
    </div>
  </template>
  
  <script setup>
  import { reactive, computed, ref } from "vue";

  const author = reactive({
    name: 'Molly',
    books: [
        'food',
        'eat',
        'toy'
    ],
  })

  const bookMessage = computed(() => {
    return author.books.length > 0 ? 'yes' : 'no';
  });

  //----------------------
  const firstName = ref('Jung');
  const lastName = ref('Molly');

  const fullName = computed({
    // getter
    get() {
        return firstName.value + ' ' + lastName.value;
    },
    // setter
    set(newValue) {
        [firstName.value, lastName.value] = newValue.split(' ');
    }
  });

  const changeFullName = () => {
    fullName.value = 'Water Tiger';
  };
  </script>
  
  <style>
  </style>