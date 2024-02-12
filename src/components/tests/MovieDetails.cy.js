import MovieDetails from "../MovieDetails.vue";

describe("<MovieDetails />", () => {
    it("Component should mount", () => {
        cy.mount(MovieDetails, {
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
    });

    it("Component should display movie Pulp Fiction", () => {
        cy.mount(MovieDetails, {
            props: {
                movie: {
                    "year": "1994",
                    "genres": [
                      "Crime",
                      "Drama"
                    ],
                    "ratings": [
                      2,
                      9,
                      7,
                      7,
                      7,
                      2,
                      2,
                      4,
                      1,
                      9,
                      6,
                      3,
                      4,
                      10,
                      8,
                      6,
                      7,
                      5,
                      9,
                      4,
                      3,
                      5,
                      9,
                      3,
                      8,
                      2,
                      6,
                      7,
                      4,
                      4
                    ],
                    "poster": "MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY500_CR0,0,336,500_AL_.jpg",
                    "contentRating": "15",
                    "duration": "PT154M",
                    "releaseDate": "1994-11-25",
                    "averageRating": 0,
                    "storyline": "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his weight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.                Written by\nSoumitra",
                    "actors": [
                      "John Travolta",
                      "Uma Thurman",
                      "Samuel L. Jackson"
                    ],
                    "imdbRating": 8.9,
                    "posterurl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SY500_CR0,0,336,500_AL_.jpg",
                    "id": 7,
                    "title": "Pulp Fiction"
                  },
            }
        });

        cy.get('[data-cy="movie-title"]').should("contain", "Pulp Fiction");
        cy.get('[data-cy="movie-rating"]').should("contain", "8.9");
        cy.get('[data-cy="movie-duration"]').should("contain", "154 min");
        cy.get('[data-cy="movie-description"]').should("contain", "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his weight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.                Written by\nSoumitra");
    });

    it("Component should emit 'closeMoviePage' once", () => {
        const onClickSpy = cy.spy().as("onClickSpy");
        cy.mount(MovieDetails, {
            emits: {
                closeMoviePage: onClickSpy
            },
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

        cy.get('[data-cy="close-movie-page-btn"]').click();
        cy.get("@onClickSpy").should("have.been.calledOnce");
    });

});