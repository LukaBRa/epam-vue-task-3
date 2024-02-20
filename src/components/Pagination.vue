<script setup lang="ts">
import PageNumber from './PageNumber.vue';
import useMoviesStore from '@/store/moviesStore';
import { computed } from 'vue';

const moviesStore = useMoviesStore();

const pagesNumber = computed(() => {
    return Math.ceil(moviesStore.moviesCount / 20);
});

</script>

<template>

    <div class="pagination">
        <PageNumber v-for="n in pagesNumber" :pageNumber={n} />
    </div>

</template>

<style scoped>
.pagination {
    margin-top: 30px;
    margin-inline: auto;
    width: max-content;
}

</style>