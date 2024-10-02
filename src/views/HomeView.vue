<script setup>
import { useRouter } from 'vue-router';
import { useProductStore } from '@/stores/product';
const productStore = useProductStore()
const router = useRouter()

function visualizar(id) {
  router.push(`/produto/${id}`) // template strings (crase)
}
</script>

<template>
<h1>Listagem de produtos</h1>
<table>
  <thead>
    <tr>
      <th>#</th>
      <th>Nome</th>
      <th>Preço</th>
      <th>Ações</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="product in productStore.products" :key="product.id">
      <td>{{ product.id }}</td>
      <td>{{product.name}}</td>
      <td>{{product.price}}</td>
      <button @click="visualizar(product.id)">Ver</button>
    </tr>
  </tbody>
</table>
</template>
