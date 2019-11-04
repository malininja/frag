const rp = require("request-promise");

async function getExchangeRate(currency, date) {
  const exchangeModuleUrl = process.env.EXCHANGE_RATE_URL;
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
