import Button from "./Button.vue";

export default {
    title: 'BUTTON',
    component: Button,
}

const Template = (args) => {
    components: { Button };
    template: '<Button v-bind="args" />';
    props: Object.keys(args);
}

export const Primary = Template.bind({});
Primary.args = {
    title: "SEARCH",
    type: "primary"
}