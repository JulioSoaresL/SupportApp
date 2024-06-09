<template>
  <div>
    <h2>Create Ticket</h2>
    <form @submit.prevent="createTicket">
      <div>
        <label>Title</label>
        <input v-model="title" type="text" required>
      </div>
      <div>
        <label>Description</label>
        <textarea v-model="description" required></textarea>
      </div>
      <button type="submit">Create Ticket</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from '../boot/axios.ts';
import { useRouter } from 'vue-router';

const title = ref('');
const description = ref('');
const router = useRouter();

const createTicket = async () => {
  const formData = new FormData();
  formData.append('title', title.value);
  formData.append('description', description.value);

  const user = JSON.parse(localStorage.getItem('accessToken') || '{}');

  try {

    await axios.post('/tickets', formData, {
      headers: {
        'Authorization': `Bearer ${user.data.token}`,
        'Content-Type': 'application/json',
      },
    });
    alert('criado com sucesso')

    title.value = '';
    description.value = '';
  } catch (error) {
    alert('Apenas clientes podem criar tickets')
  }
};
</script>
