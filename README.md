# Pakistan-s-Petrol-Price-API
A Demo to show how to build your own API by extracting HTML data from another website.

## Code Explanation:
This code uses the Express.js framework to create a simple API that listens for GET requests on the /fuel-price/pakistan endpoint. When a request is received, the code sends a GET request to fetch the HTML content from the PakBiz website, and then uses the Cheerio library to parse the HTML and extract the fuel price data. The extractFuelPrice function uses Cheerio to extract the petrol and diesel prices from the HTML:
```
function extractFuelPrice(html) {
  // use cheerio to parse the HTML and extract fuel price data
  const $ = cheerio.load(html);
  const petrolPrice = $('table tr:nth-child(2) td:nth-child(2)').text();
  const dieselPrice = $('table tr:nth-child(3) td:nth-child(2)').text();
  return { petrolPrice, dieselPrice };
}
```
## Start the Project
Run the server:
```node app.mjs```
