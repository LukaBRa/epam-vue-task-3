<script setup lang="ts">
import HomePage from "./views/HomePage.vue";
import MoviePage from "./views/MoviePage.vue";
import { ref, computed } from "vue";

const movieIdSelected = ref(-1);

const selectMovie = (id:number) => {
    movieIdSelected.value = id;
} 

const showMoviePage = computed(() => {
    return movieIdSelected.value > -1;
})

const closeMoviePage = () => {
    movieIdSelected.value = -1;
}

</script>

<template>

    <HomePage v-if="!showMoviePage" @selectMovie="selectMovie"/>

    <MoviePage v-else="showMoviePage" :movieId="movieIdSelected" @closeMoviePage="closeMoviePage"/>
 
</template>

<style scoped>



</style>
