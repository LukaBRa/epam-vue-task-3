import { ref, type Ref } from "vue";
import apiClient from "@/apiClient";
import type { Movie } from "@/types/MovieTypes";

export default function useMovies() {
    const movies: Ref<Movie[]> = ref([]);
    const error = ref("");

    const getAllMovies = async() => {
        try {
            const response = await apiClient.get("/movies");
            movies.value = response.data;
        } catch (err) {
            error.value = "An error occurred while trying to fetch movies";
            console.error(err);
        }
    }

    return { movies, error, getAllMovies };
}