
// El proyecto se trata sobre calcular impuestos en una compra
// en moneda extrangera. Tambien se podria obtener el valor de 
// distintas divisas y cryptos.


// a partir de un precio en ars calculo los impuestos que tendria. Ej: netflix, spotify, etc
const tax = (price) => price * 1.75;

const currencies = {'USD': 282,
                    'EUR': 300,
                    'GBP': 318.26,
                    'BRL': 53.96,
                    'CLP': 0.3
                    }

const coins = {
    'BTC': 19110, 
    'ETH': 1310, 
    'BNB': 274, 
    'DOGE': 0.0605
};

const convert_to_ars = (price, currency) => {
    for (let [key, value] of Object.entries(currencies)) {
        if (currency === key) {
            const display = `$${price} ${key} = $${price * value} ARS`
            return display
        }
        else if (Object.values(currencies).includes(currency)) {
            alert('Currency not supported')
            return false
        }
    } 

    }


// print precios de cryptos
const crypto = (obj) => {
    for (let [key, value] of Object.entries(obj)) {
        console.log(key, value);
    }
}






let user_value = parseFloat(prompt('Enter a value: '));
console.log(tax(user_value));
console.log(convert_to_ars(1000, 'USD'));
// crypto(coins);

