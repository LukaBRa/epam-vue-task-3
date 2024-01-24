<script setup lang="ts">

/* const props = defineProps<{
    imgPath: string,
    title: string,
    genre: string,
    releaseDate: number,
}>(); */

</script>

<template>

    <div class="movie-card">

        <img :src="'/images/movie-image.PNG'" alt="Movie image">

        <div class="movie-info">

            <div class="movie-title">
                <h3>Pulp Fiction</h3>
                <p>Action & Adventure</p>
            </div>

            <div class="movie-release-date">
                2004
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