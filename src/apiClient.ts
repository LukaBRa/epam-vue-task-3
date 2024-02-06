import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://tame-erin-pike-toga.cyclic.app",
    headers: {
        "Content-Type": "application/json",
    }
});

export default apiClient;