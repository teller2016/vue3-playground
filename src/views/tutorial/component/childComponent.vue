<template>
  <div>
    <h2>자식 컴포넌트</h2>
    <p>{{props}}</p>
    <p>{{msg || 'props가 아직 전달안됨'}}</p>

    <button @click="changeMsg">메시지 변경</button>

    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  msg: String,
});

const emits = defineEmits(["changeMsg"]);

const changeMsg = () => {
  emits("changeMsg", "Emit으로 변경된 메시지");
};
</script>

<style>
</style>