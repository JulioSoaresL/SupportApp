<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div>
        <label>Email</label>
        <input v-model="email" type="email" required>
      </div>
      <div>
        <label>Password</label>
        <input v-model="password" type="password" required>
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from '../boot/axios.ts'

const email = ref('');
const password = ref('');
const router = useRouter();

const login = async () => {
  try {
    const response = await axios.post('/login', {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem('accessToken', JSON.stringify(response.data));
    await router.push('/home');
  } catch (error) {
    console.error('Login failed', error);
  }
};
</script>
