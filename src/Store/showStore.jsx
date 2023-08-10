import axios from 'axios';
import { create } from 'zustand'

const showStore = create((set) => ({
    graphData:[],
    data: null,


    fetchdata: async (id) =>{
        const [graphRes,DataRes]=await Promise.all([
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`),
            axios.get(`https://api.coingecko.com/api/v3/coins/${id}?localization=true&market_data=true`)])



        const graphData=graphRes.data.prices.map((price=>{
            const [timestamp,p]=price;
            const date= new Date(timestamp).toLocaleDateString("en-us");
            return{
                Date: date,
                price: p,
            }
        }));

        console.log(DataRes);
        set({graphData});
        set({ data: DataRes.data })        
        
        
    },
}))

export  default showStore;