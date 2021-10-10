<template>
    <div>
        <h1>天气</h1>
        <h2>城市：{{city}}</h2>
        <h3>温度：{{cloth}}</h3>
        <h3>风向：{{xiche}}</h3>
        <router-link to="/about">进入about页面</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            city:null,
            cloth:null,
            xiche:null
        }
    },
    async beforeMount(){
        let key = 'b6e01f8d7e064abb8ca797ac04280925';
        let httpUrl = `https://free-api.heweather.net/s6/weather/lifestyle?location=${this.$route.params.city}&key=${key}`
        let res =await axios.get(httpUrl)
        // axios.get(httpUrl).then((res)=>{
        //     console.log(res)
        // },()=>{
        //     console.log(err)
        // })
        let data = res.data;
        this.city = data.HeWeather6[0].basic.location;
        this.cloth = data.HeWeather6[0].lifestyle[1].txt
        this.xiche = data.HeWeather6[0].lifestyle[6].txt
        console.log(res)
        console.log(this.$route)
    }
}
</script>