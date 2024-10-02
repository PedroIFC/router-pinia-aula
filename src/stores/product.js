import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const products = ref([
    { id: 1, name: 'Salgado frito', price: 4.5, qty: 100, desc: 'Muito bom, porem as vezes vem gelado'},
    { id: 2, name: 'Pão de batata com bacon', price: 5.5, qty: 50, desc: 'bom tambem, porem as veze vem gelado'},
    { id: 3, name: 'Pão de queijo', price: 2, qty: 70, desc: 'Bom e barato, porem nao gosto muito'},
    { id: 4, name: 'Suco de laranja', price: 7, qty: 1000, desc: 'Bonzinho ate, porem nao eh natural'},
    { id: 5, name: 'Trento', price: 3, qty: 80, desc: 'Delicia, o duo eh o melhor sabor, queria que fosse 1 centavo'}
  ])

  function getProductById(id) {
    for (let product of products.value) {
        if (product.id == id) { 
          return product
        }
        return {}
    }
    
  }

  return { products, getProductById }
})
