import { useMovie } from "../useMovie";

describe("useMovie composable tests", () => {

    const { movie, getMovie } = useMovie();

    it("Composable shouldn't return any movies", () => {
        expect(movie.value).to.eq(undefined);
    });

    it("Composable should get movie with id 1 and title The Shawshank Redemption", () => {
        getMovie(1);
        expect(movie.value.title).to.eq("The Shawshank Redemption");
    });

});