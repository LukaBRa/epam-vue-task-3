import { computed, ref } from "vue";
import type { Ref } from "vue";
import { defineStore } from "pinia";
import allMovies from "@/movies.json";
import useFilterButtonsStore from "./filterButtonsStore";

const useMoviesStore = defineStore("moviesStore", () => {

    const movies = ref([...allMovies]);

    function searchMovies(searchQuery: string | string[], property: string) {
        if(searchQuery === ""){
            movies.value = [...allMovies];
            return;
        }
        if(Array.isArray(searchQuery)){

            movies.value = allMovies.filter(movie => movie.genres.some(genre => searchQuery.includes(genre)));

        } else {

            movies.value = allMovies.filter(movie => movie[property].includes(searchQuery));

        }
    }

    function sortMovies(sortBy: string) {
        if(sortBy === "release date"){
            movies.value = movies.value.sort((a, b) => new Date(b.releaseDate).getFullYear() - new Date(a.releaseDate).getFullYear());
        } else {
            movies.value = movies.value.sort((a, b) => b.imdbRating - a.imdbRating);
        }
    }

    const moviesCount = computed(() => {
        return movies.value.length;
    })

    return {
        movies,
        searchMovies,
        moviesCount,
        sortMovies,
    }
});

export default useMoviesStore;