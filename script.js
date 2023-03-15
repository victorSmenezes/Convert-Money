const button = document.getElementById('converty-button');
const select = document.getElementById('currency-select')
const dolar = 5.25;
const euro = 5.64;
const bitcoin = 0.0000075


const ConvertValue = () => {
    const inputValue = document.getElementById('input-value');
    const realValueText = document.getElementById('real-value-text');
    const currencyValueText = document.getElementById('currency-value-text');

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: 'BRL',
    }).format(inputValue.value);

    if (select.value === 'US$ Dólar americano')
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: 'USD',
        }).format(inputValue.value / dolar);

    if (select.value === '€ Euro') {
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
            style: "currency",
            currency: 'EUR',
        }).format(inputValue.value / euro);
    }

    if (select.value === 'Bitcoin') {
        currencyValueText.innerHTML = new Intl.NumberFormat('es-sv', {
            style: "currency",
            currency: 'BTC',
        }).format(inputValue.value * bitcoin);
    }

};

ChangeCurrency = () => {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById('currency-img')

    if (select.value == 'US$ Dólar americano') {
        currencyName.innerHTML = 'Dólar americano'
        currencyImg.src = "./assets/eua.svg"
    }

    if (select.value == '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/euro.svg'
    }

    if (select.value == 'Bitcoin') {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = './assets/bitcoin.png'
    }

    ConvertValue()
}

button.addEventListener('click', ConvertValue);
select.addEventListener('change', ChangeCurrency)