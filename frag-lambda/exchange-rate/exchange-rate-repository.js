const _ = require("lodash");
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const uuid = require('uuid');

const TableName = "exchange-rates";

async function getAll() {
  const data = await dynamoDb.scan({ TableName }).promise();
  return data.Items;
}

async function get(id) {
  const params = { TableName, Key: { id } };
  const data = await dynamoDb.get(params).promise();
  return data.Item;
}

async function insert(exchangeRate) {
  const id = uuid.v1();
  exchangeRate.id = id;
  const params = { TableName, Item: exchangeRate };
  await dynamoDb.put(params).promise();
  return id;
}

function update(id, data) {
  data.id = id;
  const params = { TableName, Item: data };
  return dynamoDb.put(params).promise();
}

async function search(currency, date) {
  const exchangeRates = await getAll();
  return _.find(exchangeRates, { currency, date });
}

module.exports = { getAll, get, insert, update, search };
