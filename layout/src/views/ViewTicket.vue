<template>
  <div>
    <h2>View Ticket</h2>
    <div v-if="ticket">
      <h3>{{ ticket.title }}</h3>
      <p>{{ ticket.description }}</p>
      <p>Status: {{ ticket.status }}</p>
      <div v-if="ticket.attachment">
        <p>Attachment: <a :href="`http://localhost:8001/storage/${ticket.attachment}`" target="_blank">View</a></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from '../boot/axios.ts';
import { useRoute } from 'vue-router';

const route = useRoute();
const ticket = ref<any>(null);

onMounted(async () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const ticketId = route.params.id;

  try {
    const response = await axios.get(`http://localhost:8001/api/tickets/${ticketId}`, {
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
    });
    ticket.value = response.data;
  } catch (error) {
    console.error('Failed to fetch ticket', error);
  }
});
</script>
