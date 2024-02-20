import { mount } from "@vue/test-utils";
import PageNumber from "../../PageNumber.vue";
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
      },
      name: "homepage"
  }))

  const push = vi.fn()
  useRouter.mockImplementationOnce(() => ({
    push
  }))

test("Component should mount", () => {
    const wrapper = mount(PageNumber, {
        props: {
            pageNumber: {
                n: 1
            }
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
    expect(wrapper).toBeTruthy();
});

test("Component should have content: 1", async () => {
    const wrapper = mount(PageNumber, {
        props: {
            pageNumber: {
                n: 1
            }
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
    expect(wrapper.find("#page-number-button").text()).toBe("1");
});

test("Component should toggle page 2", async () => {
    const wrapper = mount(PageNumber, {
        props: {
            pageNumber: {
                n: 2
            }
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
    const togglePageSpy = vi.spyOn(wrapper.vm, "togglePage");
    expect(wrapper.find("#page-number-button").text()).toBe("2");
    await wrapper.find("#page-number-button").trigger("click");
    expect(togglePageSpy).toHaveBeenCalledOnce();
    expect(togglePageSpy).toHaveBeenCalledWith(2);
});