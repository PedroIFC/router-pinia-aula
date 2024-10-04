<script setup>
import { useRouter } from 'vue-router'
import { useProductStore } from '@/stores/product'
import { reactive, ref } from 'vue'
const productStore = useProductStore()
const router = useRouter()

function visualizar(id) {
  router.push(`/produto/${id}`) // template strings (crase)
}

const produtoAdd = reactive({ id: 0, name: '', price: 0, qty: 0, desc: '' })

function adicionarProduto() {
  if (produtoAdd.id != 0) {
    //   const novoProduto = {
    //     id: produtoAdd.id,
    //     name: produtoAdd.name,
    //     price: produtoAdd.price,
    //     qty: produtoAdd.qty,
    //     desc: produtoAdd.desc
    //   }
    productStore.products.push(produtoAdd)
  } else {
    alert('Adicione as informações')
  }
}
</script>

<template>
  <body>
    <h1>Listagem de produtos</h1>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Nome</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in productStore.products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.qty }}</td>
          <button @click="visualizar(product.id)">Ver</button>
        </tr>
      </tbody>
    </table>
    <form @submit.prevent="adicionarProduto">
      <input type="number" placeholder="Código do produto" v-model="produtoAdd.id" />

      <input type="text" placeholder="Nome do produto" v-model="produtoAdd.name" />

      <input type="number" placeholder="Preço do produto" v-model="produtoAdd.price" />

      <input type="number" placeholder="Quantidade em estoque" v-model="produtoAdd.qty" />

      <textarea placeholder="Descrição do produto" v-model="produtoAdd.desc"></textarea>

      <button type="submit">Adicionar Produto</button>
    </form>
  </body>
</template>
<style scoped>
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
}
input,
textarea {
  margin-bottom: 1rem;
  width: 20rem;
  min-width: 20rem;
}
textarea {
  min-height: 5rem;
  max-width: 20rem;
  max-height: 5rem;
}
</style>
