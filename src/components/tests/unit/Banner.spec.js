import { mount } from "@vue/test-utils";
import Banner from "../../Banner.vue";
import { test, expect, vi } from "vitest";
import { createTestingPinia } from "@pinia/testing";

const wrapper = mount(Banner, {
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

test("Banner should contain title FIND YOUR MOVIE", () => {
    expect(wrapper.find('#banner-title').text()).toBe("FIND YOUR MOVIE");
});

test("Component should contain action bar and filter", () => {
    expect(wrapper.find("#banner-action-bar").exists()).toBeTruthy();
    expect(wrapper.find("#banner-filter").exists()).toBeTruthy();
});