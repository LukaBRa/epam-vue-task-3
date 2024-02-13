<script setup lang="ts">
import { computed } from "vue";
import { formatGenres } from "@/utils/formatGenres";
import { useRouter } from "vue-router";

const props = defineProps(["movie"]);
const router = useRouter();

const releaseDate = computed(() => {
    return new Date(props.movie.releaseDate).getFullYear();
})

const selectMovie = (id: number) => {
    router.push("/movie/" + id);
}

</script>

<template>

    <div class="movie-card">

        <img id="card-image" data-cy="card-img" @click="selectMovie(movie.id)" v-lazyload="movie.posterurl" :alt="movie.title">

        <div class="movie-info">

            <div class="movie-title">
                <h3 id="card-title" data-cy="card-title">{{ movie.title }}</h3>
                <p id="card-genres">{{ formatGenres(movie.genres) }}</p>
            </div>

            <div id="card-release-date" data-cy="card-release-date" class="movie-release-date">
                {{ releaseDate }}
            </div>

        </div>

    </div>

</template>

<style scoped>

.movie-card {
    max-width: 350px;
}

.movie-card img {
    width: 100%;
    height: 450px;
    object-fit: cover;
    cursor: pointer;
}

.movie-info {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    color: #FFFFFF;
}

.movie-title h3 {
    margin-bottom: 10px;
}

.movie-release-date {
    border: 1px solid #555555;
    padding: 2px 10px;
    border-radius: 3px;
}

</style>