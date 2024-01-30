<script setup lang="ts">
import Button from "./Button.vue";
import { ref } from "vue";
import type { Ref } from "vue";
import useMoviesStore from "@/store/moviesStore";
import useFilterButtonsStore from "@/store/filterButtonsStore";

const inputSearchText: Ref<string> = ref("");
const movieStore = useMoviesStore();
const filterStore = useFilterButtonsStore();

const handleSearch = () => {
    movieStore.searchMovies(inputSearchText.value, filterStore.selectedSearchFilter);
}

</script>

<template>

    <div class="search-bar">
        <input @keyup.enter="handleSearch" v-model="inputSearchText" type="text">
        <Button @click="handleSearch" title="SEARCH" type="primary" />
    </div>

</template>

<style scoped>

.search-bar {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 10px;
    margin-bottom: 10px;
}

.search-bar input {
    width: 100%;
    background-color: rgba(66, 66, 66, 0.8);
    color: #FFFFFF;
    border: 0px solid rgba(66, 66, 66, 0.8);
    border-radius: 3px;
    font-size: 1.2rem;
    padding: 0px 10px;
}

</style>