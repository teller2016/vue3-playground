<template>
    <div>
        <h1>handleSubmit</h1>

        <form @submit="onSubmit">
            <div>
                <input type="email" v-model="email" v-bind="emailAttrs" name="email"/>
                <p>{{ errors.email }}</p>
                <input type="password"  v-model="password" v-bind="passwordAttrs" name="password"/>
                <p>{{ errors.password }}</p>
            </div>
            <button type="submit">Submit</button>
            <button type="button" @click="onReset">Reset</button>
            <button type="button" @click="onSetFieldError">setFieldError</button>
        </form>
       
    </div>
</template>
    
<script setup>
import {useForm} from 'vee-validate'
import * as yup from 'yup';

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
});

const { errors, handleSubmit, defineField, resetForm, setFieldError } = useForm({
  validationSchema: schema,
  initialValues: {
    // email: 'asdf@asdf.com',
    // password: 'asdf1234!',
  }
});

const [email, emailAttrs] = defineField('email');
const [password, passwordAttrs] = defineField('password');

const onSuccess = (values) => {
  alert(JSON.stringify(values, null, 2));
};

const onFail = ({values, errors, results}) => {
    console.log(values);
    console.log(errors);
    console.log(results);
    const firstError = Object.keys(errors)[0];
    const el = document.querySelector(`[name="${firstError}"]`);

    el?.scrollIntoView({
      behavior: 'smooth',
    });
    el.focus();
}

// validation 성공, 실패 callback
const onSubmit = handleSubmit(onSuccess, onFail);

const onReset = () => {
    resetForm({
  touched: {
    email: false,
  },
  errors: {
    email: 'custom error',
  },
  values: {
    email: 'newvalue@email.com',
  },
});
}

const onSetFieldError = () => {
    setFieldError('email', 'setFieldError의 에러입니다');
}

</script>

<style>
</style>