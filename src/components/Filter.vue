<script setup lang="ts">
import type { PropType } from "vue";
import FilterButton from "./FilterButton.vue"

interface FilterButtonProps {
    type: string,
    title: string,
    active: boolean,
    buttonSide: string
}

interface ButtonToggleArgs {
    type: string,
    title: string,
}

defineProps<{
    filterTitle: string,
    filterButtons: FilterButtonProps[],
}>()

const emit = defineEmits(['toggleButton']);

const buttonToggled = (args: ButtonToggleArgs) => {
    emit("toggleButton", args);
}

</script>

<template>

    <div class="filter-container">
        <p>{{ filterTitle }}</p>

        <div class="filter-buttons">
            <FilterButton v-for="button in filterButtons"
                :type="button.type" 
                :title="button.title" 
                :active="button.active" 
                :buttonSide="button.buttonSide"
                @toggleFilterButton="buttonToggled"
            />
        </div>

    </div>

</template>

<style scoped>

.filter-container {
    display: flex;
    align-items: center;
    gap: 20px;
}

.filter-container p {
    color: #FFFFFF;
}

</style>