<script setup lang="ts">
import FilterButton from "./FilterButton.vue";
import useFilterButtonsStore from "@/store/filterButtonsStore";
import type { FilterButtonProps } from "@/types/FilterTypes";

const filterStore = useFilterButtonsStore();

interface ButtonToggleArgs {
    type: string,
    title: string,
}

defineProps<{
    filterTitle: string,
    filterButtons: FilterButtonProps[],
}>()

const buttonToggled = (args: ButtonToggleArgs) => {
    filterStore.toggleButton(args);
}

</script>

<template>

    <div class="filter-container">
        <p id="filter-title" data-cy="filter-title">{{ filterTitle }}</p>

        <div class="filter-buttons">
            <FilterButton data-test="filter-button" data-cy="filter-button" v-for="button in filterButtons"
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