<script setup lang="ts">
import { computed } from "vue";
import type { FilterButtonProps } from "@/types/FilterTypes";

const props = defineProps<FilterButtonProps>()

const buttonClass = computed(() => ({
    active: props.active,
    'button-left-side': props.buttonSide === "left",
    'button-right-side': props.buttonSide === "right",
}));

</script>

<template>

    <button id="button" data-cy="filter-button" @click="$emit('toggleFilterButton', {type, title})" :class="buttonClass">{{ title }}</button>

</template>

<style scoped>

button {
    padding: 10px 20px;
    cursor: pointer;
    background-color: rgba(66, 66, 66, 0.6);
    color: #FFFFFF;
    border: 0px solid rgba(66, 66, 66, 0.6);
}

button.active {
    background-color: #F65261;
    color: #FFFFFF;
    border: 0px solid #F65261;
}

button.button-left-side{
    border-radius: 5px 0px 0px 5px;
}

button.button-right-side{
    border-radius: 0px 5px 5px 0px;
}

</style>