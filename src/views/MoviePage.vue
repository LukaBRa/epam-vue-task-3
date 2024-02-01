<script setup lang="ts">
import MovieDetails from '@/components/MovieDetails.vue';
import MovieList from '@/components/MovieList.vue';
import Footer from '@/layout/Footer.vue';
import useMoviesStore from '@/store/moviesStore';
import { onMounted, computed } from 'vue';
import { useMovie } from "@/composables/useMovie";
import { formatGenres } from "@/utils/formatGenres";

const props = defineProps(["movieId"]);
const movieStore = useMoviesStore();
const { movie, getMovie } = useMovie();
const emit = defineEmits(["closeMoviePage"]);

onMounted(() => {
    getMovie(props.movieId);
    movieStore.searchMovies(movie.value.genres, "genre");
    window.scrollTo(0, 0);
});

const selectMovie = (id: number) => {
    getMovie(id);
    movieStore.searchMovies(movie.value.genres, "genre");
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