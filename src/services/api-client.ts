import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '252e11dfa2584baa91b00409f619acb8'
    }
})