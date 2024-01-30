import Filter from "../components/Filter.vue";

export default {
    title: 'FILTER',
    component: Filter,
}

const Template = (args) => {
    components: { Filter };
    template: '<Filter v-bind="args" />';
    props: Object.keys(args);
}

export const Search = Template.bind({});
Search.args = {
    filterTitle: "SEARCH BY",
    filterButtons: [
        {
            type: "search",
            title: "TITLE",
            active: true,
            buttonSide: "left"
        },
        {
            type: "search",
            title: "GENRE",
            active: false,
            buttonSide: "right"
        }
    ]
};

export const Sort = Template.bind({});
Sort.args = {
    filterTitle: "SORT BY",
    filterButtons: [
        {
                type: "sort",
                title: "RELEASE DATE",
                active: true,
                buttonSide: "left"
            },
            {
                type: "sort",
                title: "RATING",
                active: false,
                buttonSide: "right"
            }
        ]
}