import { mount } from "@vue/test-utils";
import MovieCard from "../../MovieCard.vue";
import { test, expect, vi, vitest } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import { useRoute, useRouter } from "vue-router";

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: () => {}
  }))
}))

test("Component should display movie Pulp Fiction", async () => {

  useRoute.mockImplementationOnce(() => ({
    params: {
      id: 1
    }
  }))

  const push = vi.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))

    const wrapper = mount(MovieCard, {
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
            ],
            stubs: ["router-link", "router-view"]
        }
    });
    expect(wrapper.find('#card-title').text()).toBe("Pulp Fiction");
    expect(wrapper.find('#card-genres').text()).toBe("Crime, Drama");
    expect(wrapper.find("#card-release-date").text()).toBe("1994");
});

test("Component should call 'selectMovie' once", async () => {
    const wrapper = mount(MovieCard, {
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

    const selectMovieSpy = vi.spyOn(wrapper.vm, "selectMovie");
    await wrapper.find("#card-image").trigger("click");

    expect(selectMovieSpy).toBeCalledTimes(1);
});