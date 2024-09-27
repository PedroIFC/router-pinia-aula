<script setup>
defineProps(['id'])
</script>
<template>
    <h1  v-if="id == 10"> Parabens vc acertou o numero - {{ id }}</h1>
    <h1 v-else>Detalhes do produto - {{ id }}</h1>
</template>