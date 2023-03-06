const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const API_PORT = process.env.PORT || 3000;

app.get('/fuel-price/pakistan', async (req, res) => {
  try {
    const response = await axios.get('https://pakbiz.com/finance/petroleumprices.html');
    // extract fuel price data from response
    const fuelPrice = extractFuelPrice(response.data);
    res.json({ fuelPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

function extractFuelPrice(html) {
  // use cheerio to parse the HTML and extract fuel price data
  const $ = cheerio.load(html);
  const petrolPrice = $('table tr:nth-child(1) td:nth-child(2)').text();
  const dieselPrice = $('table tr:nth-child(1) td:nth-child(3)').text();
  return { petrolPrice, dieselPrice };
}

app.listen(API_PORT, () => {
  console.log(`API server started on port ${API_PORT}`);
});
