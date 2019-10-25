const rp = require("request-promise");

async function getExchangeRate(currency, date) {
  const exchangeModuleUrl = "https://2kg3pwydnf.execute-api.us-east-1.amazonaws.com/dev/exchange-rate/search";
  const url = `${exchangeModuleUrl}/${currency}/${date}`;
  
  try {
    const exchangeRateString = await rp(url);
    return JSON.parse(exchangeRateString);
  } catch(e) {
    if (e.statusCode === 404) return null;
    throw e;
  }
}

module.exports = { getExchangeRate };
