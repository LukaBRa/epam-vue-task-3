import useMovies from "@/composables/useMovie";
import { test, expect } from "vitest";

test("Composable should return all movies", async () => {
    const { movies, error, getAllMovies } = useMovies();

    try{
        await getAllMovies();
        
        expect(movies.length).toBe(122);
    } catch (err) {
        console.log(err);
    }
    
});