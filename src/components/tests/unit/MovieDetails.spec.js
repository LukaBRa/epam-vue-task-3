import { mount } from "@vue/test-utils";
import MovieDetails from "../../MovieDetails.vue";
import { test, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";

test("Component should mount to display details about movie Pulp Fiction", () => {
    const wrapper = mount(MovieDetails, {
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
        },
        global: {
            plugins: [
                createTestingPinia({
                    stubActions: false,
                    createSpy: vi.fn,
                })
            ]
        }
    });

    expect(wrapper.find("#movie-title").text()).toBe("Pulp Fiction");
    expect(wrapper.find("#movie-rating").text()).toBe("8.9");
    expect(wrapper.find("#movie-release-date").text()).toBe("1994");
    expect(wrapper.find("#movie-duration").text()).toBe("154 min");
    expect(wrapper.find("#movie-description").text()).toBe("Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his weight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.                Written by\nSoumitra");
});

test("Component should emit 'closeMoviePage'", async () => {
    const wrapper = mount(MovieDetails, {
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
        },
        global: {
            plugins: [
                createTestingPinia({
                    stubActions: false,
                    createSpy: vi.fn,
                })
            ]
        }
    });

    await wrapper.find("#close-movie-page-button").trigger("click");
    
    expect(wrapper.emitted().closeMoviePage).toBeTruthy();
});