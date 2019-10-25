const repository = require("./exchange-rate-repository");

function getAll(req, res, next) {
  res.send(repository.getAll());
  return next();
}

function get(req, res, next) {
  const { id } = req.params;

  const exchangeRate = repository.get(id);
  if (!exchangeRate) {
    res.sendStatus(404);
  } else {
    res.send(exchangeRate);
  }

  return next();
}

function insert(req, res, next) {
  const exchangeRate = req.body;

  const id = repository.insert(exchangeRate);
  res.send(id);
  return next();
}

function update(req, res, next) {
  const { id } = req.params;
  const exchangeRate = req.body;
  
  const updated = repository.update(id, exchangeRate);
  res.send(updated);
  return next();
}

module.exports = { getAll, get, insert, update };
