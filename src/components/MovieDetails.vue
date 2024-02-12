<script setup lang="ts">
import WebsiteTitle from './WebsiteTitle.vue';
import { computed } from 'vue';
import { formatGenres } from "@/utils/formatGenres";

const props = defineProps(["movie"]);

const movieDuration = computed(() => {
    const indexOfM = props.movie.duration.indexOf("M");

    return props.movie.duration.substring(2, indexOfM) + " min";
});

</script>

<template>

    <header class="container-fluid">

    <img class="banner-img" src="/images/netflix-banner.jpg" alt="Netflix banner">

    <div class="container movie-header-section">
        <WebsiteTitle />
        <button id="close-movie-page-button" data-cy="close-movie-page-btn" @click="$emit('closeMoviePage')" class="search-button"><span class="material-icons search-icon">search</span></button>
    </div>

    <section class="container">

        <div class="movie-overview-section">

            <img data-cy="movie-image" :src="movie.posterurl" :alt="movie.title">

            <div class="movie-overview-details">
                <div class="movie-title">
                    <h1 id="movie-title" data-cy="movie-title">{{ movie.title }}</h1>
                    <p id="movie-rating" data-cy="movie-rating" class="movie-rating">{{ movie.imdbRating }}</p>
                </div>
                <p id="movie-genres" class="movie-genres">{{ formatGenres(movie.genres) }}</p>
                <div class="movie-duration-release">
                    <p id="movie-release-date" data-cy="movie-release-date">{{ new Date(movie.releaseDate).getFullYear() }}</p>
                    <p id="movie-duration" data-cy="movie-duration">{{ movieDuration }}</p>
                </div>
                <p id="movie-description" data-cy="movie-description" class="movie-description">{{ movie.storyline }}</p>
            </div>
        </div>

    </section>

    </header>

</template>

<style scoped>

header {
    padding-bottom: 40px;
    position: relative;
}

header .banner-img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(20%);
    overflow: hidden;
}

.search-icon {
    transform: rotate(90deg);
    color: #F65261;
    font-size: 2rem;
}

.search-button {
    background: transparent;
    cursor: pointer;
    border: none;
}

.movie-header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.movie-overview-section {
    display: flex;
    gap: 40px;
    margin-top: 30px;
    width: 100%;
}

.movie-overview-details {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.movie-title {
    color: #FFFFFF;
    font-size: 2.2rem;
    display: flex;
    align-items: center;
    gap: 30px;
}

.movie-rating {
    border: 1px solid #FFFFFF;
    padding: 15px;
    border-radius: 50%;
    color: #A1E66F;
}

.movie-genres {
    color: #FFFFFF;
    margin-top: 10px;
    font-size: 1.1rem;
}

.movie-duration-release {
    color: #F65261;
    display: flex;
    font-size: 1.6rem;
    gap: 20px;
    margin: 30px 0px;
}

.movie-description {
    color: #FFFFFF;
    font-size: 1.1rem;
}

</style>