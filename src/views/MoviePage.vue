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
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const movieStore = useMoviesStore();
const movie = ref();

onMounted((async() => {
    movie.value = await MovieService.getSingle(parseInt(route.params.id as string));
    if(movie.value) {
        movieStore.searchMovies(movie.value.genres, "genre");
    }
    window.scrollTo(0, 0);
}));

const selectMovie = async (id: number) => {
    router.push("/movie/" + id);
}

const closeMoviePage = () => {
    router.push("/");
}

watch(() => route.params.id, async (newSortFilter, oldSortFilter) => {
    movie.value = await MovieService.getSingle(parseInt(route.params.id as string));
    window.scrollTo(0, 0);
})

watch(() => route.query.page, (newSortFilter, oldSortFilter) => {
    window.scrollTo(0, 0);
})

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