const repository = require("../exchange-rate-module/exchange-rate-repository");

function calculate(req, res, next) {
  const { amount, currency, date } = req.body;

  const exchangeRate = repository.search(currency, date);

  if (!exchangeRate) {
    res.sendStatus(404);
  } else {
    const exchangedAmount = exchangeRate.rate * amount;
    res.send({ exchangedAmount });
  }

  return next();
}

module.exports = { calculate };
