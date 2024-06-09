<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <div>
        <label>Nome Completo</label>
        <input v-model="name" type="text" required>
      </div>
      <div>
        <label>CPF</label>
        <input v-model="cpf" type="text" required>
      </div>
      <div>
        <label>Email</label>
        <input v-model="email" type="email" required>
      </div>
      <div>
        <label>Password</label>
        <input v-model="password" type="password" required>
      </div>
      <div>
        <label>Role</label>
        <select v-model="role" required>
          <option value="cliente">Cliente</option>
          <option value="colaborador">Colaborador</option>
        </select>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from '../boot/axios.ts'
import { useRouter } from 'vue-router';

const name = ref('');
const cpf = ref('');
const email = ref('');
const password = ref('');
const role = ref('cliente');
const router = useRouter();

const register = async () => {
  try {
    await axios.post('/register', {
      name: name.value,
      cpf: cpf.value,
      email: email.value,
      password: password.value,
      role: role.value,
    });
    await router.push('/login');
  } catch (error) {
    console.error('Registration failed', error);
  }
};
</script>
