import FilterButton from "../components/Filter.vue";

export default {
    title: "FilterButton",
    component: FilterButton,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { FilterButton },
    template: '<FilterButton v-bind="$props" />'
});

export const Primary = Template.bind({});
Primary.args = {
    title: "TITLE",
    active: true,
    buttonSide: "left",
}

export const Secondary = Template.bind({});
Secondary.args = {
    title: "GENRE",
    active: false,
    buttonSide: "right",
}

