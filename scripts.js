const convertButton = document.getElementById("convert-button")
const currencySelect = document.getElementById("currency-select")
const currencyToConvert = document.getElementById("currency-to-convert")

function convertValue() {
    const inputCurrencyValue = document.getElementById("value").value

    const CurrencyValueToConvert = document.getElementById("currency-value-to-convert")
    const CurrencyValueConverted = document.getElementById("currency-value")
    /* Converter em reais */
    const dolarToday = (inputCurrencyValue * 0.19)
    const euroToday = (inputCurrencyValue * 0.16)
    const ieneToday = (inputCurrencyValue * 29.00)
    /* Converter em reais */
    //Converter em Dolar
    const dolarToReal = (inputCurrencyValue * 5.35)
    const dolarToEuro = (inputCurrencyValue * 0.86)
    const dolarToIene = (inputCurrencyValue * 156.42)
    //Converter em Dolar
    //Converter em Euro
    const euroToDolar = (inputCurrencyValue * 1.16)
    const euroToReal = (inputCurrencyValue * 6.20)
    const euroToIene = (inputCurrencyValue * 181.31)
    //converter em Euro
    //converter em Iene
    const ieneToDolar = (inputCurrencyValue * 0.0064)
    const ieneToEuro = (inputCurrencyValue * 0.0055)
    const ieneToReal = (inputCurrencyValue * 0.034)
    //converter em Iene
    if (currencySelect.value == "dolar convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(dolarToday)
    }
    if (currencySelect.value == "euro convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(euroToday)
    }
    if (currencySelect.value == "iene convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(ieneToday)
    }
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
    if (currencyToConvert.value == "euro a converter") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencyToConvert.value == "iene a converter") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
    }
    if (currencyToConvert.value == "real a converter") {
        CurrencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (currencyToConvert.value == "dolar a converter" && currencySelect.value == "dolar convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (currencyToConvert.value == "euro a converter" && currencySelect.value == "euro convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }
    if (currencyToConvert.value == "iene a converter" && currencySelect.value == "iene convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
    }
    if (currencyToConvert.value == "dolar a converter" && currencySelect.value == "real convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(dolarToReal)
    }
    if (currencyToConvert.value == "dolar a converter" && currencySelect.value == "euro convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(dolarToEuro)
    }
    if (currencyToConvert.value == "dolar a converter" && currencySelect.value == "iene convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(dolarToIene)
    }
    if (currencyToConvert.value == "euro a converter" && currencySelect.value == "dolar convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(euroToDolar)
    }
    if (currencyToConvert.value == "euro a converter" && currencySelect.value == "real convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(euroToReal)
    }
    if (currencyToConvert.value == "euro a converter" && currencySelect.value == "iene convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(euroToIene)
    }
    if (currencyToConvert.value == "iene a converter" && currencySelect.value == "dolar convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(ieneToDolar)
    }
    if (currencyToConvert.value == "iene a converter" && currencySelect.value == "euro convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(ieneToEuro)
    }
    if (currencyToConvert.value == "iene a converter" && currencySelect.value == "real convertido") {
        CurrencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(ieneToReal)
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
    if (currencySelect.value == "iene convertido") {
        currencyName.innerHTML = "Iene Japonês"
    }
    if (currencySelect.value == "real convertido") {
        currencyName.innerHTML = "Real Brasileiro"
    }
    if (currencyToConvert.value == "dolar a converter") {
        currencyNameToConvert.innerHTML = "Dólar americano"
    }
    if (currencyToConvert.value == "euro a converter") {
        currencyNameToConvert.innerHTML = "Euro"
    }
    if (currencyToConvert.value == "iene a converter") {
        currencyNameToConvert.innerHTML = "Iene Japonês"
    }
    if (currencyToConvert.value == "real a converter") {
        currencyNameToConvert.innerHTML = "Real Brasileiro"
    }
    convertValue()
}

currencySelect.addEventListener("change", changeCurrency)
currencyToConvert.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)