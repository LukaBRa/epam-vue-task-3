<script setup lang="ts">
import Filter from './components/Filter.vue';
import Button from './components/Button.vue';
import MovieCard from './components/MovieCard.vue';
import WebsiteTitle from './components/WebsiteTitle.vue';
import Footer from './layout/Footer.vue';
import { ref, type Ref } from "vue";
import { useSearch } from "./composables/useSearch.ts";

const { movies, getMovies } = useSearch();
const selectedSearchFilter = ref("title");
const inputSearchText: Ref<string> = ref("");

interface ButtonToggleArgs {
    type: string,
    title: string,
}

const searchFilterButtons = ref([
    {
        type: "search",
        title: "TITLE",
        active: true,
        buttonSide: "left"
    },
    {
        type: "search",
        title: "GENRE",
        active: false,
        buttonSide: "right"
    }
]);

const sortFilterButtons = ref([
{
        type: "sort",
        title: "RELEASE DATE",
        active: true,
        buttonSide: "left"
    },
    {
        type: "sort",
        title: "RATING",
        active: false,
        buttonSide: "right"
    }
]);

const toggleButton = (arg: ButtonToggleArgs) => {
    if(arg.type == "search"){

        searchFilterButtons.value = searchFilterButtons.value.map(btn => ({ ...btn, active: btn.title === arg.title }))
        selectedSearchFilter.value = arg.title.toLowerCase();
    } else {

        sortFilterButtons.value = sortFilterButtons.value.map(btn => ({ ...btn, active: btn.title === arg.title }));

    }
}

const handleSearch = () => {
    getMovies(inputSearchText.value, selectedSearchFilter.value);
}

</script>

<template>

    <header class="container-fluid">

        <img src="/images/netflix-banner.jpg" alt="">

        <div class="container">
            <WebsiteTitle />
        </div>

        <section class="search-section container">

            <h1>FIND YOUR MOVIE</h1>

            <div class="search-bar">
                <input v-model="inputSearchText" type="text">
                <Button @click="handleSearch" title="SEARCH" type="primary" />
            </div>

            <Filter filterTitle="SEARCH BY" :filter-buttons="searchFilterButtons" @toggleButton="toggleButton"/>

        </section>

    </header>

    <section class="container-fluid bg-lightgray">
        <div class="container">
            <div class="movies-filter">
                <p>{{ movies.length }} movie found</p>
                <Filter filterTitle="SORT BY" :filter-buttons="sortFilterButtons" @toggleButton="toggleButton"/>
            </div>
        </div>
    </section>

    <section class="container-fluid bg-darkgray padding-movie-list">

        <div class="container">
            <div class="movie-list">
                <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
            </div>
        </div>

    </section>

    <Footer />

</template>

<style scoped>

header {
    padding-bottom: 40px;
    position: relative;
}

header img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    filter: brightness(30%);
    overflow: hidden;
}

.search-section {
    display: flex;
    flex-direction: column;
    align-items: start;
    height: 80%;
    padding: 40px 60px;
}

.search-section h1{
    color: #FFFFFF;
    font-weight: lighter;
    font-size: 2.5rem;
    letter-spacing: 5px;
    margin-bottom: 30px;
}

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

.movies-filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0px;
}

.movies-filter p {
    color: #FFFFFF;
    font-weight: bold;
    font-size: 1.1rem;
    letter-spacing: 1px;
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
