import ActionBar from "../../ActionBar.vue";
import { flushPromises, mount } from "@vue/test-utils";
import { test, expect, describe, beforeEach, vi } from "vitest";
import { createPinia, defineStore, setActivePinia } from "pinia"; 
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
    }
  }))

  const push = vi.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))

const wrapper = mount(ActionBar, {
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

test("Component should search for The Lord of the Rings movies", async () => {
    
    const movieStore = useMoviesStore();
    await wrapper.find('#search-input').setValue("The Lord of the Rings");
    await wrapper.find('#search-button').trigger("click");

    expect(wrapper.find('#search-input').element.value).toBe("The Lord of the Rings");
    expect(movieStore.movies).toHaveLength(3);
});

test("Component should search for Pulp Fiction", async () => {

    const moviesStore = useMoviesStore();
    await wrapper.find("#search-input").setValue("Pulp Fiction");
    await wrapper.find("#search-button").trigger("click");

    expect(moviesStore.movies).toHaveLength(1);
});