<template>
    <div>
        <input type="text" @input="emit('update:modelValue', $event.target.value)" @blur="emit('blur')">
        <p>{{ error }}</p>
    </div>
</template>
    
<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
    modelValue: String,
    error: String,
});

const emit = defineEmits(['update:modelValue', 'blur']);
</script>

<style>
</style>