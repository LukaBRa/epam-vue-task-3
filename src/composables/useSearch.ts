import { ref } from "vue"
import type { Ref } from "vue"

/* interface MoviesType {
    id: number,
    title: string,
    genre: string,
    releaseDate: number,
    imgPath: string
}

interface ComposableReturnType {
    movies: Ref<MoviesType[]>,
    getMovies: (searchText: string, property: string) => void
}

const tempMovies: MoviesType[] = [
    {
        id: 1,
        title: "Four rooms",
        genre: "Action & Adventure",
        releaseDate: 2004,
        imgPath: "/images/movie-image.PNG"
    },
    {
        id: 2,
        title: "Jackie Brown",
        genre: "Action & Adventure",
        releaseDate: 2003,
        imgPath: "/images/jackie-brown.PNG"
    },
    {
        id: 3,
        title: "Kill Bill: Vol 2",
        genre: "Oscar winning Movie",
        releaseDate: 1994,
        imgPath: "/images/kill-bill-2.PNG"
    },
    {
        id: 4,
        title: "Pulp Fiction",
        genre: "Action & Adventure",
        releaseDate: 2004,
        imgPath: "/images/pulp-fiction.PNG"
    },
    {
        id: 5,
        title: "Kill Bill: Vol 1",
        genre: "Action & Adventure",
        releaseDate: 2003,
        imgPath: "/images/kill-bill-1.PNG"
    },
    {
        id: 6,
        title: "Reservoir dogs",
        genre: "Oscar winning Movie",
        releaseDate: 1994,
        imgPath: "/images/reservoir-dogs.PNG"
    },
] */

/* export function useSearch() {

    const movies= ref();

    function getMovies(searchText: string, property: string) {
        if(searchText === ""){
            
            return;
        }
        if(property == "title"){
            movies.value = tempMovies.filter(movie => movie.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        } else {
            movies.value = tempMovies.filter(movie => movie.genre.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        }
    }

    return { movies, getMovies };
} */