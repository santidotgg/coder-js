
// El proyecto se trata sobre calcular impuestos en una compra
// en moneda extrangera. Tambien se podria obtener el valor de 
// distintas divisas y cryptos.


// a partir de un precio en ars calculo los impuestos que tendria. Ej: netflix, spotify, etc
const tax = (price) => price * 1.75;


const convert_to_ars = (price, currency) => {
        
        if (currency == 'USD') {
            return `\$ ${price * 282} ARS`;
        } 
        else if(currency == 'EUR') {
            return `\$ ${price * 303} ARS`;
        } 
        else{
            return 'Proximamente mas divisas';
        }
    }


// print precios de cryptos
const crypto = (obj) => {
    for (let [key, value] of Object.entries(obj)) {
        console.log(key, value);
    }
}




const coins = {
    'BTC': 19110, 
    'ETH': 1310, 
    'BNB': 274, 
    'DOGE': 0.0605
};
console.log(tax('500'));
console.log(convert_to_ars(1000, 'USD'));
crypto(coins);