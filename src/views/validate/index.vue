<template>
    <div>
        <h1>vee-validate</h1>

        <customInput v-model="email" v-bind="emailProps"></customInput>
        <div>{{ errors.email }}</div>
        <p>
            values:{{ values }}
        </p>
    </div>
</template>
    
<script setup>
import validateComposable from '@/composables/validate/index.js';
import customInput from '@/components/CustomInput.vue';

const {  
    values,
    email,
    emailProps,
    errors 
    } = validateComposable();
</script>

<style>
</style>