
const axios = require('axios');
const coins = require('./lib/constants'); 
const express = require('express');
const rates = require('./lib/rates');
const app = express()
const port = 3000
 

console.log(rates);

function getExchange(coinFrom, coinTo, amount){
    let result;
    if(isNaN(amount)) throw new Error("Please insert a valid amount.");

    if(!coins.AVALIABLE_COINS.arr_coins.includes(coinFrom)) throw new Error("Not a valid coin.");

    if(!coins.AVALIABLE_COINS.arr_coins.includes(coinTo)) throw new Error("Not a valid coin.");
    
    axios.get("https://api.exchangeratesapi.io/latest?base" + coinFrom).then(resp => {
        //console.log(resp.data.rates[coinTo]);
        result = (amount * resp.data.rates[coinTo]).toFixed(2);            
        });   
    return result;
}

