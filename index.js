
const axios = require('axios');
const coins = require('./lib/constants'); 

getExchange('USD','BRL',0);
function getExchange(coinFrom, coinTo, amount){
    if(isNaN(amount)) throw new Error("Please insert a valid amount.");

    if(!coins.AVALIABLE_COINS.arr_coins.includes(coinFrom)) throw new Error("Not a valid .");


    if( coins.AVALIABLE_COINS.arr_coins.includes(coinFrom) && 
    coins.AVALIABLE_COINS.arr_coins.includes(coinTo)){
        axios.get("https://api.exchangeratesapi.io/latest?base" + coinFrom).then(resp => {
            console.log(resp.data.rates[coinTo]);
        });
    }
}