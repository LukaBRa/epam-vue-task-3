import { ref } from "vue";
import allMovies from "@/movies.json";

export function useMovie() {

    const movie = ref();

    function getMovie(id: number) {
        movie.value = allMovies.find(movie => movie.id === id); 
    }

    return { movie, getMovie }
}