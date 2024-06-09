<script setup lang="ts">
import CreateTicket from "./CreateTicket.vue";
import TicketsList from "./TicketsList.vue";
const user = JSON.parse(localStorage.getItem('accessToken') || '{}');

</script>

<template>
  <CreateTicket v-if="user.data.loggedUser.role === 'cliente'" />
  <TicketsList v-else-if="user.data.loggedUser.role === 'colaborador'" />
</template>

<style scoped>

</style>