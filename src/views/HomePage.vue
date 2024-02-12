<script setup lang="ts">
import Filter from '../components/Filter.vue';
import MovieList from '@/components/MovieList.vue';
import Footer from '../layout/Footer.vue';
import Banner from '@/components/Banner.vue';
import useFilterButtonsStore from '@/store/filterButtonsStore';
import useMoviesStore from '@/store/moviesStore';

const filterStore = useFilterButtonsStore();
const moviesStore = useMoviesStore();

const emit = defineEmits([
    'selectMovie'
]);

const selectMovie = (id: number) => {
    emit("selectMovie", id);
}

</script>

<template>

    <Banner />

    <section class="container-fluid bg-lightgray">
        <div class="container">
            <div class="movies-filter">
                <p>{{ moviesStore.moviesCount }} movie found</p>
                <Filter filterTitle="SORT BY" :filter-buttons="filterStore.sortFilterButtons"/>
            </div>
        </div>
    </section>

    <MovieList @selectMovie="selectMovie"/>

    <Footer />

</template>

<style scoped>

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

</style>
