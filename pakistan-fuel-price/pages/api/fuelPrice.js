

import axios from 'axios';
import cheerio from 'cheerio';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://pakbiz.com/finance/petroleumprices.html');
    // extract fuel price data from response
    const fuelPrice = extractFuelPrice(response.data);
    res.json({ fuelPrice });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
  res.status(200).json({ name: 'Maham' })
}


function extractFuelPrice(html) {
  // use cheerio to parse the HTML and extract fuel price data
  const $ = cheerio.load(html);
  const petrolPrice = $('table tr:nth-child(1) td:nth-child(2)').text();
  const dieselPrice = $('table tr:nth-child(1) td:nth-child(3)').text();
  return { petrolPrice, dieselPrice };
}

