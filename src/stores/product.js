import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Salgado frito', price: 4.5, qty: 100 },
    { id: 2, name: 'Pão de batata com bacon', price: 5.5, qty: 50 },
    { id: 3, name: 'Pão de queijo', price: 2, qty: 70 },
    { id: 4, name: 'Suco de laranja', price: 7, qty: 1000 },
    { id: 5, name: 'Trento', price: 3, qty: 80 }
  ])

  return { products }
})
