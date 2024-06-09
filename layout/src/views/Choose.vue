<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const toLogin = () => {
  router.push('/login')
}

const toRegister = () => {
  router.push('/register')
}
</script>

<template>
  <div class="card">
    <button @click="toLogin">Login</button>
    <button @click="toRegister">Cadastrar</button>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  gap: 1rem;
}
</style>