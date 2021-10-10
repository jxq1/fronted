import axios from "./httpApi.js"
const base = {
    //baseUrl:"http://localhost:3000",
    baseUrl:'/api',
    banner:"/banner"
}

const banner = {
    getData(){
        return axios.get(base.baseUrl+base.banner,{params:{username:"ximing"}})
    }
}

export default {
    banner
}