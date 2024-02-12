import ActionBar from "../ActionBar.vue";
import allMovies from "../../movies.json";

describe("<ActionBar />", () => {

    beforeEach(function () {
        cy.getMovieStore().as('movieStore');
        cy.getFilterStore().as('filterStore');
    })

    it("Component should render", function() {
        cy.spy(this.movieStore, "searchMovies");
        cy.mount(ActionBar);

        cy.get("@movieStore")
            .then(store => store.movies = []);

        cy.get('[data-cy="search-button"]').click();

        cy.get("@movieStore")
            .its("searchMovies")
            .should("be.calledOnce");
        
        cy.get("@movieStore")
            .its("movies")
            .should("have.lengthOf", 122);

    })

    it("Component should search for drama movies", function () {
        cy.spy(this.movieStore, "searchMovies");
        cy.spy(this.filterStore, "toggleButton");
        cy.mount(ActionBar);

        const dramaMoviesCount = allMovies.reduce((acc, currentValue) => {
            return currentValue.genres.includes("Drama") ? acc + 1 : acc;
        }, 0);

        cy.get("@movieStore")
            .then(store => store.movies = []);

        cy.get("@filterStore").invoke("toggleButton", { title: "GENRE", type: "search" });
        cy.get('[data-cy="search-input"]').type("Drama");
        cy.get('[data-cy="search-button"]').click();

        cy.get("@movieStore")
            .its("searchMovies")
            .should("be.calledOnce");
        cy.get("@movieStore")
            .its("movies")
            .should("have.length", dramaMoviesCount);        
    });

    it("Component should search for The Lord of The Rings movies", function () {
        cy.spy(this.movieStore, "searchMovies");
        cy.spy(this.filterStore, "toggleButton");
        cy.mount(ActionBar);

        const lotrMoviesCount = allMovies.reduce((acc, currentValue) => {
            return currentValue.title.includes("The Lord of the Rings") ? acc + 1 : acc;
        }, 0);

        cy.get("@filterStore").invoke("toggleButton", { title: "TITLE", type: "search" });
        cy.get('[data-cy="search-input"]').type("The Lord of the Rings");
        cy.get('[data-cy="search-button"]').click();

        cy.get("@movieStore")
            .its("searchMovies")
            .should("be.calledOnce");
        cy.get("@movieStore")
            .its("movies")
            .should("have.length", lotrMoviesCount);
        
    });

    it("Store should return empty list of movies", function() {
        cy.spy(this.movieStore, "searchMovies");
        cy.spy(this.filterStore, "toggleButton");
        cy.mount(ActionBar);

        cy.get("@filterStore").invoke("toggleButton", { title: "Title", type: "search" });
        cy.get('[data-cy="search-input"]').type("Some random text");
        cy.get('[data-cy="search-button"]').click();

        cy.get("@movieStore")
            .its("searchMovies")
            .should("be.calledOnce");
        cy.get("@movieStore")
            .its("movies")
            .should("have.length", 0);
    });

});