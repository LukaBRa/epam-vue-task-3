<script setup lang="ts">

interface MoviesType {
    id: number,
    title: string,
    genre: string,
    releaseDate: number,
    imgPath: string
}

const props = defineProps<{
    movie: MoviesType
}>();

</script>

<template>

    <div class="movie-card">

        <img v-lazyload="movie.imgPath" :alt="movie.title">

        <div class="movie-info">

            <div class="movie-title">
                <h3>{{ movie.title }}</h3>
                <p>{{ movie.genre }}</p>
            </div>

            <div class="movie-release-date">
                {{ movie.releaseDate }}
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