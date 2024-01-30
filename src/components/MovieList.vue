<script setup lang="ts">
import MovieCard from './MovieCard.vue';
import useMoviesStore from '@/store/moviesStore';
import useFilterButtonsStore from '@/store/filterButtonsStore';
import { watch } from "vue";

const moviesStore = useMoviesStore();
const filterStore = useFilterButtonsStore();
const emit = defineEmits(['selectMovie']);

watch(() => filterStore.selectedSortFilter, (newSortFilter, oldSortFilter) => {
    moviesStore.sortMovies(newSortFilter);
})

const selectMovie = (id: number) => {
    emit('selectMovie', id);
}

</script>

<template>

    <section class="container-fluid bg-darkgray padding-movie-list">

    <div class="container">
        <div v-if="moviesStore.moviesCount > 0" class="movie-list">
            <MovieCard v-for="movie in moviesStore.movies" :key="movie.id" :movie="movie" @selectMovie="selectMovie"/>
        </div>
        <h1 v-else>No films found</h1>
    </div>

    </section>

</template>

<style scoped>

h1{
    text-align: center;
    color: #FFFFFF;
    font-size: 3.5rem;
    margin: 50px 0px;
}

.movie-list {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 20px;
}

.padding-movie-list {
    padding: 50px 0px;
}

@media (max-width: 745px) {
    .movie-list {
        justify-content: center;
    }
}

</style>