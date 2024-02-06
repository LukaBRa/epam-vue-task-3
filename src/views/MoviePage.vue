<script setup lang="ts">
import MovieDetails from '@/components/MovieDetails.vue';
import MovieList from '@/components/MovieList.vue';
import Footer from '@/layout/Footer.vue';
import useMoviesStore from '@/store/moviesStore';
import { onMounted, computed } from 'vue';
import { formatGenres } from "@/utils/formatGenres";
import type { Movie } from '@/types/MovieTypes';
import { ref } from "vue";
import type { Ref } from "vue";

const props = defineProps(["movieId"]);
const movieStore = useMoviesStore();
const emit = defineEmits(["closeMoviePage"]);
const movie = ref(movieStore.movies.find(movie => movie.id == props.movieId));

onMounted((() => {
    if(movie.value) {
        movieStore.searchMovies(movie.value.genres, "genre");
    }
    window.scrollTo(0, 0);
}));

const selectMovie = (id: number) => {
    movie.value = movieStore.movies.find(movie => movie.id === id);
    if(movie.value){
        movieStore.searchMovies(movie.value.genres, "genre");
    }
    window.scrollTo(0, 0);
}

const closeMoviePage = () => {
    emit("closeMoviePage");
}

</script>

<template>

    <MovieDetails :movie="movie" @closeMoviePage="closeMoviePage"/>

    <section class="container-fluid bg-lightgray">
        <div class="container genres-section">
            <p v-if="movie" class="genres-section-text">Films by {{ formatGenres(movie.genres) }} {{ movie.genres.length > 1 ? "genres" : "genre" }}</p>
        </div>
    </section> 

    <MovieList @selectMovie="selectMovie" @closeMoviePage="closeMoviePage"/>

    <Footer />

</template>

<style scoped>

.genres-section-text {
    color: #FFFFFF;
    font-size: 1.5rem;
}

.genres-section {
    padding: 20px 0px;
}

</style>