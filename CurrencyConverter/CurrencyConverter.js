const apiKey = 'a142402eed9503e4da8db3b1';
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const convertBtn = document.getElementById('convertBtn');
const resultDiv = document.getElementById('result');

const convertCurrency = () => {
    const amount = amountInput.value;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    if (!amount || isNaN(amount) || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount to convert.';
        return;
    }

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.conversion_rates[toCurrency];
            if (exchangeRate) {
                const convertedAmount = (amount * exchangeRate).toFixed(2);
                resultDiv.textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount} ${toCurrency}.`;
            } else {
                resultDiv.textContent = 'Invalid currency selected for conversion.';
            }
        })
        .catch(error => {
            resultDiv.textContent = 'An error occurred while fetching exchange rates.';
            console.error(error);
        });
};

convertBtn.addEventListener('click', convertCurrency);