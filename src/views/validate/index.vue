<template>
    <div>
        <h1>vee-validate</h1>

        <customInput v-model="email" v-bind="emailProps"></customInput>
        <button :disabled="!meta.touched">Submit</button>
        <div>{{ errors.email }}</div>
        <p>
            values:{{ values }}
        </p>
        <p>
            meta: {{ meta }}
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
    errors,
    meta,
    } = validateComposable();
</script>

<style>
</style>