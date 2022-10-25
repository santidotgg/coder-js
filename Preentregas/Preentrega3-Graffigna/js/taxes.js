const amount = document.querySelector("form input");


window.addEventListener("load", ()=>{
    getPrice();
});

amount.addEventListener("keyup", e => {
    e.preventDefault();
    getPrice();
});



const getPrice = () => {
    const taxedPrice = document.querySelector("form .exchange-price");
    let amountVal = amount.value;
    const display = `$ ${Math.round(((amountVal * 1.75) + Number.EPSILON) * 100) / 100}`;
    taxedPrice.innerText = display;
}
