const service = require("./exchange-calculator-service");

async function calculate(req, res, next) {
  const { amount, currency, date } = req.body;

  let exchangeRate;
  try {
    exchangeRate = await service.getExchangeRate(currency, date);
  } catch (e) {
    return next(e);
  }

  if (!exchangeRate) {
    res.sendStatus(404);
  } else {
    const exchangedAmount = exchangeRate.rate * amount;
    res.send({ exchangedAmount });
  }

  return next();
}

module.exports = { calculate };
