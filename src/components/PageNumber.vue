<script setup lang="ts">
import { useRouter, useRoute, type LocationQueryValue } from 'vue-router';
import { computed } from 'vue';

const router = useRouter();
const route = useRoute();
const props = defineProps<{
    pageNumber: {
        n: number
    }
}>();

const togglePage = (page: number) => {
    if(route && route.name == "homepage"){
        router.push(`/?page=${page}`);
    }
    if(route && route.name == "moviepage"){
        router.push({ path: route.fullPath, query: { page } });
    }
}

const activePage = computed(() => {
    if(route && !route.query.page && props.pageNumber.n == 1){
        return true
    }
    return parseInt(route && route.query.page as string) == props.pageNumber.n;
});

</script>

<template>

    <button id="page-number-button" @click="togglePage(pageNumber.n)" :class="{ active: activePage }">{{ pageNumber.n }}</button>

</template>

<style scoped>

button {
    font-size: 1.1rem;
    padding: 5px 10px;
    background: transparent;
    color: #FFFFFF;
    border: none;
    text-decoration: underline;
    cursor: pointer;
}

button.active {
    background-color: #F65261;
}

</style>