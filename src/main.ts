import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.directive("lazyload", {
    mounted(el, binding) {
        function handleScrollEvent() {
            const img = el.getBoundingClientRect();

            if(
                img.top >= 0 &&
                img.left >= 0 &&
                img.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                img.right <= (window.innerWidth || document.documentElement.clientWidth)
            ) {
                el.src = binding.value;
                window.removeEventListener("scroll", handleScrollEvent);
                console.log(`img ${binding.value}`)
            }
        }

        window.addEventListener("scroll", handleScrollEvent);

        handleScrollEvent();
    }
});

app.mount('#app')
