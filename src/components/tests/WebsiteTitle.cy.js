import WebsiteTitle from "../WebsiteTitle.vue";

describe("<WebsiteTitle />", () => {

    it("Component should mount with title Netflixroulete", () => {
        cy.mount(WebsiteTitle);

        cy.get('[data-cy="website-title"]').should("contain", "netflixroulette");
    });

});