import MovieCard from "../MovieCard.vue";

describe("<MovieCard />", () => {
    beforeEach(function () {
        cy.getMovieStore().as('movieStore');
        cy.getFilterStore().as('filterStore');
    })

    it("Component should mount", function() {
        cy.mount(MovieCard, {
            props: {
                movie: {
                    "year": "1957",
                    "genres": [
                      "Crime",
                      "Drama"
                    ],
                    "ratings": [
                      3,
                      5,
                      3,
                      3,
                      10,
                      3,
                      4,
                      1,
                      6,
                      10,
                      2,
                      8,
                      4,
                      6,
                      8,
                      6,
                      1,
                      10,
                      4,
                      5,
                      9,
                      3,
                      2,
                      4,
                      8,
                      10,
                      10,
                      7,
                      9,
                      6
                    ],
                    "poster": "MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
                    "contentRating": "15",
                    "duration": "PT96M",
                    "releaseDate": "1957-07-29",
                    "averageRating": 0,
                    "storyline": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.                Written by\npjk <PETESID@VNET.IBM.COM>",
                    "actors": [
                      "Henry Fonda",
                      "Lee J. Cobb",
                      "Martin Balsam"
                    ],
                    "imdbRating": 8.9,
                    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
                    "id": 5,
                    "title": "12 Angry Men"
                  },
            },
        });
        
        cy.get('[data-cy="card-title"]').should("contain", "12 Angry Men");
        cy.get('[data-cy="card-release-date"]').should("contain", "1957");
    });

    it("Component should select movie on click", function () {
        const onClickSpy = cy.spy().as("onClickSpy");
        cy.mount(MovieCard, {
            emits: { selectMovie: onClickSpy },
            props: {
                movie: {
                    "year": "1957",
                    "genres": [
                      "Crime",
                      "Drama"
                    ],
                    "ratings": [
                      3,
                      5,
                      3,
                      3,
                      10,
                      3,
                      4,
                      1,
                      6,
                      10,
                      2,
                      8,
                      4,
                      6,
                      8,
                      6,
                      1,
                      10,
                      4,
                      5,
                      9,
                      3,
                      2,
                      4,
                      8,
                      10,
                      10,
                      7,
                      9,
                      6
                    ],
                    "poster": "MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
                    "contentRating": "15",
                    "duration": "PT96M",
                    "releaseDate": "1957-07-29",
                    "averageRating": 0,
                    "storyline": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.                Written by\npjk <PETESID@VNET.IBM.COM>",
                    "actors": [
                      "Henry Fonda",
                      "Lee J. Cobb",
                      "Martin Balsam"
                    ],
                    "imdbRating": 8.9,
                    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BODQwOTc5MDM2N15BMl5BanBnXkFtZTcwODQxNTEzNA@@._V1_SY500_CR0,0,333,500_AL_.jpg",
                    "id": 5,
                    "title": "12 Angry Men"
                  },
            }
        });

        cy.get('[data-cy="card-img"]').click();

        cy.get("@onClickSpy").should("have.been.calledOnce");
    });

});