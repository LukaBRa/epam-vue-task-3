import FilterButton from "../FilterButton.vue";

describe("<FilterButton />", () => {
    beforeEach(function () {
        cy.getMovieStore().as('movieStore');
        cy.getFilterStore().as('filterStore');
    })

    it("Component should mount", function () {
        cy.mount(FilterButton);
    });

    it("Component should have classes active and button-left-side, title: TITLE", function () {
        cy.mount(FilterButton, {
            props: {
                type: "search",
                title: "TITLE",
                active: true,
                buttonSide: "left"
            }
        });

        cy.get('[data-cy="filter-button"]').should("contain", "TITLE");
        cy.get('[data-cy="filter-button"]').should("have.class", "active button-left-side");
    })

    it("Component should have class button-right-side, title: GENRE", function () {
        cy.mount(FilterButton, {
            props: {
                type: "search",
                title: "GENRE",
                active: false,
                buttonSide: "right"
            }
        });

        cy.get('[data-cy="filter-button"]').should("contain", "GENRE");
        cy.get('[data-cy="filter-button"]').should("have.class", "button-right-side");
    });

    it("Component should emit 'toggleFilterButton' once with params search and title", function () {
        const onClickSpy = cy.spy().as("onClickSpy");
        cy.mount(FilterButton, {
            emits: { toggleFilterButton: onClickSpy },
            props: {
                type: "search",
                title: "TITLE",
                active: true,
                buttonSide: "left",
            },
        });

        cy.get('button').click();

        cy.get("@onClickSpy").then((spy) => {
            console.log("onClickSpy calls:", spy.getCalls());
        });

        cy.get("@onClickSpy").should("have.been.calledOnce");

        cy.get("@filterStore")
            .its("selectedSearchFilter")
            .should('contain', "title");
    });

    it("Component should emit 'toggleFilterButton' once and set selected filter to sort by release date", () => {
        const onClickSpy = cy.spy().as("onClickSpy");
        cy.mount(FilterButton, {
            emits: { toggleFilterButton: onClickSpy },
            props: {
                type: "sort",
                title: "RELEASE DATE",
                active: true,
                buttonSide: "left",
            },
        });

        cy.get('button').click();

        cy.get("@onClickSpy").should("have.been.calledOnce");

        cy.get("@filterStore").invoke("toggleButton", { title: "RELEASE DATE", type: "sort" });

        cy.get("@filterStore")
            .its("selectedSortFilter")
            .should('contain', "release date");
    });

    it("Component should emit 'toggleFilterButton' once and set selected filter to sort by rating", () => {
        const onClickSpy = cy.spy().as("onClickSpy");
        cy.mount(FilterButton, {
            emits: { toggleFilterButton: onClickSpy },
            props: {
                type: "sort",
                title: "RATING",
                active: true,
                buttonSide: "left",
            },
        });

        cy.get('button').click();

        cy.get("@onClickSpy").should("have.been.calledOnce");

        cy.get("@filterStore").invoke("toggleButton", { title: "RATING", type: "sort" });

        cy.get("@filterStore")
            .its("selectedSortFilter")
            .should('contain', "rating");
    });
});