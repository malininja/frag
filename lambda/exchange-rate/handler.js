// https://riptutorial.com/aws-lambda/example/25230/create-simple-crud-operation
const repository = require("./exchange-rate-repository");

function response(statusCode, data) {
  const result = { statusCode };
  if (data) result.body = JSON.stringify(data);

  return result;
}

async function getAll() {
  const data = await repository.getAll();
  return response(200, data);
}

async function get(event) {
  const { id } = event.pathParameters;
  const exchangeRate = await repository.get(id);

  if (!exchangeRate) return response(404);
  return response(200, exchangeRate);
}

async function insert(event) {
  const exchangeRate = JSON.parse(event.body);
  const id = await repository.insert(exchangeRate);
  const data = await repository.get(id);

  return response(200, data);
}

async function update(event) {
  const { id } = event.pathParameters;
  const exchangeRate = JSON.parse(event.body);
  await repository.update(id, exchangeRate);
  const data = await repository.get(id);

  return response(200, data);
}

async function search(event) {
  const { currency, date } = event.pathParameters;
  const exchangeRate = await repository.search(currency, date);

  if (!exchangeRate) return response(404);
  return response(200, exchangeRate);
}

module.exports = { getAll, get, insert, update, search };
