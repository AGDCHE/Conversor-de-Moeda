const convertButton = document.getElementById("convert-button")
const currencySelect = document.getElementById("currency-select")

function convertValue() {
    const inputCurrencyValue = document.getElementById("value").value

    const CurrencyValueToConvert = document.getElementById("currency-value-to-convert")
    const CurrencyValueConverted = document.getElementById("currency-value")

    const dolarToday = 5.50
    const euroToday = 6.22
    const pesoToday = 0.0038643
    const ieneToday = 0.036

    if (currencySelect.value == "dolar") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

if (currencySelect.value == "peso") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS"
    }).format(inputCurrencyValue / pesoToday)
}

if (currencySelect.value == "iene") {
    CurrencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: "JPY"
    }).format(inputCurrencyValue / ieneToday)
}

    CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar Americano"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"

    }

if (currencySelect.value == "peso") {
    currencyName.innerHTML = "Peso Argentino"
}

if (currencySelect.value == "iene") {
    currencyName.innerHTML = "Iene Japones"
}

    convertValue()

}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)