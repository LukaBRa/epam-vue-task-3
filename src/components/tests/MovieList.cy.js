import MovieList from "../MovieList.vue";
import allMovies from "../../movies.json";

describe("<MovieList />", () => {
    beforeEach(function () {
        cy.getMovieStore().as('movieStore');
        cy.getFilterStore().as('filterStore');
    })

    it("Component should mount with all(122) movies", () => {
        cy.mount(MovieList);
        cy.get("@movieStore")
            .its("movies")
            .should("have.length", 122);
    });

    it("Component should display The Lord of the Rings movies", () => {
        cy.mount(MovieList);
        cy.get("@movieStore").invoke("searchMovies", "The Lord of the Rings", "title");

        cy.get('[data-cy="movie-card"]').should("have.length", 3);
    });

    it("Component should display all action movies", () => {
        cy.mount(MovieList);

        const actionMoviesCount = allMovies.reduce((acc, currentValue) => {
            return currentValue.genres.includes("Action") ? acc + 1 : acc;
        }, 0);

        cy.get("@movieStore").invoke("searchMovies", ["Action"], "genre");
        cy.get("@movieStore")
            .its("movies")
            .should("have.length", actionMoviesCount);

        cy.get('[data-cy="movie-card"]').should("have.length", actionMoviesCount);
    });

    it("Component should't display movies", () => {
        cy.mount(MovieList);

        cy.get("@movieStore").invoke("searchMovies", "Some random text", "title");
        cy.get("@movieStore")
            .its("movies")
            .should("have.length", 0);

        cy.get('[data-cy="movie-card"]').should("have.length", 0);
    });

});