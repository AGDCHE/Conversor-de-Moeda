const convertButton = document.getElementById("convert-button")
const currencySelect = document.getElementById("currency-select")
const currencyToConvert = document.getElementById("currency-to-convert")


function convertValue() {
    const inputCurrencyValue = document.getElementById("value").value

    const CurrencyValueToConvert = document.getElementById("currency-value-to-convert")
    const CurrencyValueConverted = document.getElementById("currency-value")

    /* Convertidos em reais */
    const dolarToday = 5.50
    const euroToday = 6.22
    const pesoToday = 0.0038643
    const ieneToday = 0.036

    if (currencySelect.value == "dolar convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "peso convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoToday)
    }

    if (currencySelect.value == "iene convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }

        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)


if (currencySelect.value == "real convertido") {
CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencyToConvert.value == "dolar a converter") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyNameToConvert = document.getElementById("currency-name-to-convert")


    if (currencySelect.value == "dolar convertido") {
        currencyName.innerHTML = "Dólar americano"
    }

    if (currencySelect.value == "euro convertido") {
        currencyName.innerHTML = "Euro"

    }

    if (currencySelect.value == "peso convertido") {
        currencyName.innerHTML = "Peso argentino"
    }

    if (currencySelect.value == "iene convertido") {
        currencyName.innerHTML = "Iene Japonês"
    }

if (currencySelect.value == "real convertido") {
        currencyName.innerHTML = "Real Brasileiro"
    }

if (currencyToConvert.value == "dolar a converter") {
        currencyNameToConvert.innerHTML = "Dólar americano"
    }

    convertValue()

}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)