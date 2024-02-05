<script setup lang="ts">
import WebsiteTitle from '@/components/WebsiteTitle.vue';
import ActionBar from './ActionBar.vue';
import Filter from "@/components/Filter.vue";
import useFilterButtonsStore from "@/store/filterButtonsStore";

const filterStore = useFilterButtonsStore();

</script>

<template>

    <header class="container-fluid">

    <img src="/images/netflix-banner.jpg" alt="Netflix banner">

    <div class="container">
        <WebsiteTitle />
    </div>

    <section class="search-section container">

        <h1 data-cy="banner-title">FIND YOUR MOVIE</h1>

        <ActionBar />

        <Filter filterTitle="SEARCH BY" :filter-buttons="filterStore.searchFilterButtons"/>

    </section>

    </header>

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

</style>