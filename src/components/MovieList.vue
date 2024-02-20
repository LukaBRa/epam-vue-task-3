<script setup lang="ts">
import MovieCard from './MovieCard.vue';
import Pagination from './Pagination.vue';
import useMoviesStore from '@/store/moviesStore';
import useFilterButtonsStore from '@/store/filterButtonsStore';
import { watch, ref, onMounted } from "vue";
import { useRoute } from 'vue-router';

const moviesStore = useMoviesStore();
const filterStore = useFilterButtonsStore();
const displayMovies = ref();
const route = useRoute();

const populateDisplayMovies = () => {
    const pageNumber:number = parseInt(route.query.page as string) || 1;
    displayMovies.value = moviesStore.movies.slice((pageNumber - 1) * 20, ((pageNumber - 1) * 20) + 20);
}

onMounted(() => {
    populateDisplayMovies();
}),

watch(() => filterStore.selectedSortFilter, (newSortFilter, oldSortFilter) => {
    moviesStore.sortMovies(newSortFilter);
    populateDisplayMovies();
})

watch(() => route.query.page, (newSortFilter, oldSortFilter) => {
    populateDisplayMovies();
})

watch(() => moviesStore.movies, (newSortFilter, oldSortFilter) => {
    populateDisplayMovies();
})

</script>

<template>

    <section class="container-fluid bg-darkgray padding-movie-list">

    <div class="container">
        <div id="movies" v-if="moviesStore.moviesCount > 0" class="movie-list">
            <MovieCard data-cy="movie-card" v-for="movie in displayMovies" :key="movie.id" :movie="movie" />
        </div>
        <h1 id="no-movies" v-else>No films found</h1>
    </div>

    <Pagination />

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