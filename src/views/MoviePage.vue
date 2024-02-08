<script setup lang="ts">
import MovieDetails from '@/components/MovieDetails.vue';
import MovieList from '@/components/MovieList.vue';
import Footer from '@/layout/Footer.vue';
import useMoviesStore from '@/store/moviesStore';
import { onMounted, computed, watch } from 'vue';
import { formatGenres } from "@/utils/formatGenres";
import type { Movie } from '@/types/MovieTypes';
import { ref } from "vue";
import type { Ref } from "vue";
import MovieService from "../services/movieService";

const props = defineProps(["movieId"]);
const movieStore = useMoviesStore();
const emit = defineEmits(["closeMoviePage"]);
const movie = ref();

onMounted((async() => {
    movie.value = await MovieService.getSingle(props.movieId)
    if(movie.value) {
        movieStore.searchMovies(movie.value.genres, "genre");
    }
    window.scrollTo(0, 0);
}));

const selectMovie = async (id: number) => {
    movie.value = await MovieService.getSingle(id);
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

    <MovieDetails v-if="movie" :movie="movie" @closeMoviePage="closeMoviePage"/>

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