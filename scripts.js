const convertButton = document.getElementById("convert-button")
const currencySelect = document.getElementById("currency-select")

function convertValue() {
    const inputCurrencyValue = document.getElementById("value").value

    const CurrencyValueToConvert = document.getElementById("currency-value-to-convert")
    const CurrencyValueConverted = document.getElementById("currency-value")

    const dolarToday = 5.32
    const euroToday = 6.22

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
    convertValue()

}
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)