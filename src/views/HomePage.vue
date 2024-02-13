<script setup lang="ts">
import Filter from '../components/Filter.vue';
import MovieList from '@/components/MovieList.vue';
import Footer from '../layout/Footer.vue';
import Banner from '@/components/Banner.vue';
import useFilterButtonsStore from '@/store/filterButtonsStore';
import useMoviesStore from '@/store/moviesStore';
import { onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const filterStore = useFilterButtonsStore();
const moviesStore = useMoviesStore();
const route = useRoute();

onMounted(async() => {
    let searchQuery: string = route.query.searchQuery as string || "";
    let type: string = route.query.type as string || "title";
    moviesStore.searchMovies( searchQuery, type);
});

const showingMovies = computed(() => {
    if(!moviesStore.moviesCount){
        return "";
    }
    const start: number = route.query.page ? parseInt(route.query.page as string) : 1;
    const end = moviesStore.moviesCount <= 20 ? moviesStore.moviesCount : ((start - 1) * 20) + 20;
    return `( ${start == 1 ? 1 : (start-1) * 20} - ${end > moviesStore.moviesCount ? moviesStore.moviesCount : end} )`;
});

watch(() => route.query.page, (newSortFilter, oldSortFilter) => {
    window.scrollTo(0, 0);
})

</script>

<template>

    <Banner />

    <section class="container-fluid bg-lightgray">
        <div class="container">
            <div class="movies-filter">
                <p>{{ moviesStore.moviesCount }} movie found {{ showingMovies }}</p>
                <Filter filterTitle="SORT BY" :filter-buttons="filterStore.sortFilterButtons"/>
            </div>
        </div>
    </section>

    <MovieList />

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
