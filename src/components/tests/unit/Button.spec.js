import { mount } from "@vue/test-utils"; 
import Button from "../../Button.vue";
import { test, expect } from "vitest";


test("renders a button", () => {
    const wrapper = mount(Button);

    expect(wrapper.get('button').text()).toBe("");
});

test("button should have title SEARCH", () => {
    const wrapper = mount(Button, {
        props: {
            title: "SEARCH",
        }
    });

    expect(wrapper.get("#button").text()).toBe("SEARCH");
});

test("button should have title SORT and class 'button-primary' ", () => {
    const wrapper = mount(Button, {
        props: {
            title: "SORT",
            type: "primary"
        }
    });

    expect(wrapper.get("#button").text()).toBe("SORT");
    expect(wrapper.get("#button").classes()).toContain("button-primary");
});

test("button should have title SORT and shouldn't have class 'button-primary'", () => {
    const wrapper = mount(Button, {
        props: {
            title: "SORT",
            type: "secondary"
        }
    });

    expect(wrapper.get("#button").text()).toBe("SORT");
    expect(wrapper.get("#button").classes).not.toContain("button-primary");
});