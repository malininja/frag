const rp = require("request-promise");

const exchangeModuleUrl = "https://2kg3pwydnf.execute-api.us-east-1.amazonaws.com/dev/exchange-rate/search";

async function calculate(event) {
  const { currency, date, amount } = JSON.parse(event.body);
  
  const url = `${exchangeModuleUrl}/${currency}/${date}`;
  let exchangeRateString;
  try {
    exchangeRateString = await rp(url);
  } catch(e) {
    if (e.statusCode === 404) return { statusCode: 404 };
  }

  const exchangeRate = JSON.parse(exchangeRateString);
  const exchangedAmount = exchangeRate.rate * amount;

  return {
    statusCode: 200,
    body: JSON.stringify({ exchangedAmount }),
  };
};

module.exports = { calculate };
