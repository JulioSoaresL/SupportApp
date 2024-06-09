<template>
  <div>
    <h2>Tickets</h2>
    <div v-for="ticket in tickets.data" :key="ticket.id" class="itens">
      <h3>{{ ticket.title }}</h3>
      <p>{{ ticket.description }}</p>
      <select v-model="ticket.status" @change="changeStatus($event.target.value, ticket.id)">
        <option value="Aberto">Aberto</option>
        <option value="Em atendimento">Em atendimento</option>
        <option value="Finalizado">Finalizado</option>
      </select>
      <button @click="openDialog(ticket)">Responder</button>
    </div>

    <Teleport to="body">
      <div v-if="dialogVisible" class="modal">
        <textarea v-model="response"></textarea>
        <button @click="submitResponse">Enviar</button>
        <button @click="dialogVisible = false">Fechar</button>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import axios from '../boot/axios.ts';
import { onMounted } from 'vue';

const tickets = ref([]);
const dialogVisible = ref(false);
const response = ref('');
const selectedTicket = ref(null);
const selectedStatus = ref('');

const user = JSON.parse(localStorage.getItem('accessToken') || '{}');

const openDialog = (ticket) => {
  dialogVisible.value = true;
  selectedTicket.value = ticket;
};

const fetchTickets = async () => {
  try {
    const response = await axios.get('/tickets', {
      headers: {
        'Authorization': `Bearer ${user.data.token}`,
        'Content-Type': 'application/json',
      },
    });
    tickets.value = response.data;
  } catch (error) {
    console.error('Failed to fetch tickets', error);
  }
};

const submitResponse = async () => {
  try {
    await axios.post(`/tickets/${selectedTicket.value.id}/replies`, {
      message: response.value,
    },{
      headers: {
        'Authorization': `Bearer ${user.data.token}`,
        'Content-Type': 'application/json',
      },
    });
    response.value = '';
    selectedStatus.value = '';
    dialogVisible.value = false;
    await fetchTickets();
  } catch (error) {
    console.error('Failed to submit response', error);
  }
};

const changeStatus = async(status: string, id: number) => {
  await axios.put(`/tickets/${id}`, {status},{
    headers: {
      'Authorization': `Bearer ${user.data.token}`,
      'Content-Type': 'application/json',
    },
  })

  fetchTickets()
  alert('Status alterado!')

}

onMounted(async() => await fetchTickets());
</script>

<style scoped>
.itens{
  display: flex;
  align-items: center;
  gap: 15px;
}
.modal {
  position: fixed;
  display:flex;
  flex-direction: column;
  gap: 20px;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
  background: #1a202c;
  padding: 5rem;
  border-radius: 16px;
}
</style>