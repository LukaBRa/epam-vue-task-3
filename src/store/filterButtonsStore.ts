import { ref, type Ref } from "vue";
import { defineStore } from "pinia";

const useFilterButtonsStore = defineStore("filterButtonsStore", () => {

    const searchFilterButtons = ref([
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
    ]);
    
    const sortFilterButtons = ref([
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
    ]); 

    const selectedSearchFilter: Ref<string> = ref("title");
    const selectedSortFilter: Ref<string> = ref("release date");

    const toggleButton = (arg: { title: string, type: string }) => {
        if(arg.type == "search"){
    
            searchFilterButtons.value = searchFilterButtons.value.map(btn => ({ ...btn, active: btn.title === arg.title }))
            selectedSearchFilter.value = arg.title.toLowerCase();
        } else {
    
            sortFilterButtons.value = sortFilterButtons.value.map(btn => ({ ...btn, active: btn.title === arg.title }));
            selectedSortFilter.value = arg.title.toLowerCase();
        }
    }
    
    return {
        searchFilterButtons,
        sortFilterButtons,
        selectedSearchFilter,
        selectedSortFilter,
        toggleButton
    }
});

export default useFilterButtonsStore;