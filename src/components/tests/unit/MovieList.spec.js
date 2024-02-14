import { mount } from "@vue/test-utils";
import MovieList from "../../MovieList.vue";
import { test, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import useMoviesStore from "@/store/moviesStore";
import useFilterButtonsStore from "@/store/filterButtonsStore";
import { useRoute, useRouter } from "vue-router";

vi.mock('vue-router', () => ({
  useRoute: vi.fn(),
  useRouter: vi.fn(() => ({
    push: () => {}
  }))
}))

useRoute.mockImplementationOnce(() => ({
    params: {
        id: 1
      },
      query: {
        page: "1"
      }
  }))

  const push = vi.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))

const wrapper = mount(MovieList, {
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