import { mount } from "@vue/test-utils";
import FilterButton from "../../FilterButton.vue";
import { test, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";
import useFilterButtonsStore from "@/store/filterButtonsStore";

test("Component should mount", () => {

    const wrapper = mount(FilterButton, {
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

test("Component should have title TITLE and class 'active button-left-side'", () => {
    const wrapper = mount(FilterButton, {
        props: {
                type: "search",
                title: "TITLE",
                active: true,
                buttonSide: "left"
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

    expect(wrapper.get("#button").text()).toBe("TITLE");
    expect(wrapper.get("#button").classes()).toContain("active");
    expect(wrapper.get("#button").classes()).toContain("button-left-side");
});

test("Component should emit 'toggleFilterButton'", async () => {
    const wrapper = mount(FilterButton, {
        props: {
                type: "sort",
                title: "RELEASE DATE",
                active: false,
                buttonSide: "right"
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

    await wrapper.get("#button").trigger("click");

    expect(wrapper.emitted().toggleFilterButton).toBeTruthy();
});