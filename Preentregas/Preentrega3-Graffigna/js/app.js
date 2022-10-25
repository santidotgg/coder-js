const dropList = document.querySelectorAll("form select"),
fromCurrency = document.querySelector(".from select"),
toCurrency = document.querySelector(".to select"),
getButton = document.querySelector("form button");
const amount = document.querySelector("form input");
const some_currency = {  "fecha":"2022/10/22 00:52:49",
                        "compra":"288.00",
                        "venta":"292.00"};

for (let i = 0; i < dropList.length; i++) {
    for(let currency_code in country_list){
        let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "ARS" ? "selected" : "";
        let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }
    dropList[i].addEventListener("change", e =>{
        getFlag(e.target);
    });
}

function getFlag(element){
    for(let code in country_list){
        if(code == element.value){
            let imgTag = element.parentElement.querySelector("img");
            imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
        }
    }
}

window.addEventListener("load", ()=>{
    getPrice();
});

amount.addEventListener("keyup", e => {
    e.preventDefault();
    getPrice();
});

const changeIcon = document.querySelector("form .icon");
changeIcon.addEventListener("click", ()=>{
    let tempCode = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = tempCode;
    getFlag(fromCurrency);
    getFlag(toCurrency);
    getPrice(); // con el uso de una api cambiaria esto
})


const getPrice = () => {
    const exchangePrice = document.querySelector("form .exchange-price");
    let amountVal = amount.value;
    const display = amountVal * some_currency.venta;
    exchangePrice.innerText = `$ ${display.toLocaleString("es-AR")} ${toCurrency.value}`;


}