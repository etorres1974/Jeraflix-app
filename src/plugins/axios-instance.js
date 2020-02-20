import axios from "axios"

const CONFIG = {
    //baseURL: "https://api.themoviedb.org/3"
}

const AXIOS_INSTANCE = axios.create(CONFIG)

export default AXIOS_INSTANCE