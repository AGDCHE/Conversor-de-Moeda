const convertButton = document.getElementById("convert-button")
const currencySelect = document.getElementById("currency-select")
const currencyToConvert = document.getElementById("currency-to-convert")

const API_KEY = "a99cab827a5ff3e2a8ce62ed"

const currencyNames = {
  BRL: "Real Brasileiro",
  USD: "Dólar Americano",
  EUR: "Euro",
  JPY: "Iene Japonês"
}

const locales = {
  BRL: "pt-BR",
  USD: "en-US",
  EUR: "de-DE",
  JPY: "ja-JP"
}

async function convertValue() {
  const inputValue = Number(document.getElementById("value").value)
  const valueToConvert = document.getElementById("currency-value-to-convert")
  const valueConverted = document.getElementById("currency-value")

  if (!inputValue || inputValue <= 0) {
    valueConverted.innerHTML = "Valor inválido ❌"
    return
  }

  const fromCurrency = currencyToConvert.value
  const toCurrency = currencySelect.value

  // mostra valor de origem formatado
  valueToConvert.innerHTML = new Intl.NumberFormat(
    locales[fromCurrency],
    { style: "currency", currency: fromCurrency }
  ).format(inputValue)

  try {
    // 🚨 SEMPRE USD no plano grátis
    const response = await fetch(
      `https://v6.exchangerate-api.com/v6/a99cab827a5ff3e2a8ce62ed/latest/USD`
    )

    const data = await response.json()

    if (data.result !== "success") {
      valueConverted.innerHTML = "Erro na API ❌"
      console.error(data)
      return
    }

    const rateFrom = data.conversion_rates[fromCurrency]
    const rateTo = data.conversion_rates[toCurrency]

    // 🔁 conversão indireta
    const usdValue = inputValue / rateFrom
    const finalValue = usdValue * rateTo

    valueConverted.innerHTML = new Intl.NumberFormat(
      locales[toCurrency],
      { style: "currency", currency: toCurrency }
    ).format(finalValue)

  } catch (error) {
    console.error(error)
    valueConverted.innerHTML = "Erro ao converter 😢"
  }
}

function changeCurrency() {
  document.getElementById("currency-name").innerHTML =
    currencyNames[currencySelect.value]

  document.getElementById("currency-name-to-convert").innerHTML =
    currencyNames[currencyToConvert.value]

  convertValue()
}
currencySelect.addEventListener("change", changeCurrency)
currencyToConvert.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)