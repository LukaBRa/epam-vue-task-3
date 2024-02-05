<script setup lang="ts">

const props = defineProps<{
    title: string,
    type: string,
}>()

const buttonStyle = {
    'button-primary': props.type === "primary"
}

</script>

<template>

    <button data-cy="button" :class="buttonStyle">{{ title }}</button>

</template>

<style scoped>

.button-primary {
    background-color: #F65261;
    padding: 15px 50px;
    color: #FFFFFF;
    border: #F65261;
    font-size: 1.2rem;
    cursor: pointer;
    border-radius: 3px;
}

</style>