import Banner from "../Banner.vue";

describe("<Banner />", () => {

    beforeEach(function () {
        cy.getFilterStore().as('filterStore');
    })

    it("Component should mount", function () {
        cy.mount(Banner);
    });

    it("Component should have background image", function () {
        cy.mount(Banner);

        cy.get('img').should("have.attr", "src").should("include", "/images/netflix-banner.jpg");
    });

    it("Component should have title FIND YOUR MOVIE", function () {
        cy.mount(Banner);
        cy.get('[data-cy="banner-title"]').should("contain", "FIND YOUR MOVIE");
    });

});