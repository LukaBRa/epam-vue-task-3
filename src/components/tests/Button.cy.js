import Button from "../Button.vue";

describe("<Button />", () => {

    it("Button should render", () => {
        cy.mount(Button);
    });

    it("Button should have title SEARCH", () => {
        cy.mount(Button, {
            props: {
                title: "SEARCH"
            }
        });
        cy.get("[data-cy='button']").should("have.text", "SEARCH");
    });

    it("Button should have title SORT and class primary", () => {
        cy.mount(Button, {
            props: {
                title: "SORT",
                type: "primary"
            }
        });
        cy.get("[data-cy='button']").should('have.text', "SORT");
        cy.get("[data-cy='button']").should('have.class', "button-primary");
    });

    it("Button should have title search and not class primary", () => {
        cy.mount(Button, {
            props: {
                title: "search",
                type: "secondary",
            }
        });

        cy.get("[data-cy='button']").should('have.text', 'search');
        cy.get("[data-cy='button']").should('not.have.class', 'button-primary');
    });

});