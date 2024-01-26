import FilterButton from "./FilterButton.vue";

export default {
    title: 'FILTER BUTTON',
    component: FilterButton,
}

const Template = (args) => {
    components: { FilterButton };
    template: '<FilterButton v-bind="args" />';
    props: Object.keys(args);
}

export const Title = Template.bind({});
Title.args = {
    type: "search",
    title: "TITLE",
    active: true,
    buttonSide: "left",
}

export const Genre = Template.bind({});
Genre.args = {
    type: "search",
    title: "Genre",
    active: true,
    buttonSide: "right",
}

export const ReleaseDate = Template.bind({});
ReleaseDate.args = {
    type: "sort",
    title: "RELEASE DATE",
    active: true,
    buttonSide: "left",
}

export const Rating = Template.bind({});
Rating.args = {
    type: "sort",
    title: "RATING",
    active: true,
    buttonSide: "right",
}