const exchangeRateService = require("./exchange-rate-service");

async function calculate(event) {
  const { currency, date, amount } = JSON.parse(event.body);
  
  const exchangeRate = await exchangeRateService.getExchangeRate(currency, date);
  if (!exchangeRate) return { statusCode: 404 };
  
  const exchangedAmount = exchangeRate.rate * amount;

  return {
    statusCode: 200,
    body: JSON.stringify({ exchangedAmount }),
  };
};

module.exports = { calculate };
