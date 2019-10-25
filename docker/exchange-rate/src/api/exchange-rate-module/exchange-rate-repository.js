const _ = require("lodash");
const fs = require("fs");

let exchangeRates;

fs.readFile("exchangeRates", (err, data) => {
  if (err) {
    exchangeRates = [];
  } else {
    exchangeRates = JSON.parse(data);
  }
});

function persist() {
  fs.writeFileSync("exchangeRates", JSON.stringify(exchangeRates));
}

function getAll() {
  return exchangeRates;
}

function get(id) {
  return _.find(exchangeRates, { id });
}

function insert(exchangeRate) {
  const id = exchangeRates.length.toString();
  exchangeRate.id = id;
  exchangeRates[id] = exchangeRate;
  persist();

  return exchangeRate;
}

function update(id, data) {
  const exchangeRate = get(id);
  Object.assign(exchangeRate, data);
  persist();

  return exchangeRate;
}

function search(currency, date) {
  return _.find(exchangeRates, { currency, date });
}

module.exports = { getAll, get, insert, update, search };
