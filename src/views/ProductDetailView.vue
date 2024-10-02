<script setup>
import { useProductStore } from '@/stores/product';
import { ref, onMounted } from 'vue';

const props = defineProps(['id'])
const product = ref({})
const productStore = useProductStore()

onMounted(() => {
    product.value = productStore.getProductById(props.id)
})

</script>
<template>
    <h1>Detalhes do produto - {{ product.id }}</h1>
    <h2>Descrição - {{ product.desc }}</h2>
</template>