<template>
    <div>
        <h1>vee-validate</h1>

        <input v-model="email" v-bind="emailAttrs" type="text">
        <div>
            values:{{ values }}
            errors: {{ errors }}
        </div>
    </div>
</template>
    
<script setup>
import validateComposable from '@/composables/validate/index.js';

const {  
    values,
    email,
    emailAttrs, errors } = validateComposable();
</script>

<style>
</style>