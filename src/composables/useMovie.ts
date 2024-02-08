import { ref, type Ref } from "vue";
import type { Movie } from "@/types/MovieTypes";
import MovieService from "../services/movieService";

export default function useMovies() {
    const movies: Ref<Movie[]> = ref([]);
    const error = ref("");

    const getAllMovies = async () => {
        try {
            movies.value = await MovieService.getAll();
        } catch (err) {
            console.log(err);
        }
    }

    return { movies, error, getAllMovies };
}