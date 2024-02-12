import Filter from "../Filter.vue";

describe("<Filter />", () => {
    beforeEach(function () {
        cy.getMovieStore().as('movieStore');
        cy.getFilterStore().as('filterStore');
    })

    it("Component should mount", function () {
        cy.mount(Filter);
    });

    it("Component should have title SEARCH", function () {
        cy.mount(Filter, {
            props: {
                filterTitle: "SEARCH"
            }
        })

        cy.get('[data-cy="filter-title"]').should("contain","SEARCH");
    })

    it("Component should have 2 filter buttons and title SORT BY", function () {
        cy.mount(Filter, {
            props: {
                filterTitle: "SORT BY"
            }
        });

        cy.get("@filterStore")
            .its("sortFilterButtons")
            .should("have.length", 2);
        cy.get('[data-cy="filter-title"]').should("contain", "SORT BY");
    });

    it("Component shouldn't have filter buttons and title", function () {
        cy.mount(Filter, {
            props: {
                filterTitle: "",
                filterButtons: []
            }
        })

        cy.get('[data-cy="filter-title"]').should("contain", "");
        cy.get('[data-cy="filter-button"]').should("have.length", 0);
    });
});