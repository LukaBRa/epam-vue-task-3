import { mount } from "@vue/test-utils";
import MovieList from "../../MovieList.vue";
import { test, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import useMoviesStore from "@/store/moviesStore";
import useFilterButtonsStore from "@/store/filterButtonsStore";

const wrapper = mount(MovieList, {
    global: {
        plugins: [
            createTestingPinia({
                stubActions: false,
                createSpy: vi.fn,
            })
        ]
    }
});

test("Component should mount", () => {
    expect(wrapper).toBeTruthy();
});

test("Component shouldn't display movies", async () => {

    expect(wrapper.find("#no-movies").exists()).toBeTruthy();
});

test("Component should display movies", async () => {

    const movieStore = useMoviesStore();

    await movieStore.searchMovies("", "title");

    expect(wrapper.find("#movies").exists()).toBeTruthy();
});