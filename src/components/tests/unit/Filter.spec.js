import { mount } from "@vue/test-utils";
import Filter from "../../Filter.vue";
import { test, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import useFilterButtonsStore from "@/store/filterButtonsStore";

test("Component should mount", () => {
    const wrapper = mount(Filter, {
        global: {
            plugins: [
                createTestingPinia({
                    stubActions: false,
                    createSpy: vi.fn,
                })
            ]
        }
    });
    expect(wrapper).toBeTruthy();
});

test("Component should have title SEARCH BY", () => {
    const wrapper = mount(Filter, {
        props: {
            filterTitle: "SEARCH BY"
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
    expect(wrapper.find("#filter-title").text()).toBe("SEARCH BY");

});

test("Filter shouldn't have title", () => {
    const wrapper = mount(Filter, {
        props: {
            filterTitle: ""
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
    expect(wrapper.find("#filter-title").text()).toBe("");

});

test("Filter should have title SORT BY", () => {
    const wrapper = mount(Filter, {
        props: {
            filterTitle: "SORT BY"
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
    expect(wrapper.find("#filter-title").text()).toBe("SORT BY");
    
});
