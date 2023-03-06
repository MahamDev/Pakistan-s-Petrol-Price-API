import { useState, useEffect } from 'react';

export default function Home() {
  const [fuelPrice, setFuelPrice] = useState(null);

  useEffect(() => {
    console.log('useEffect is being called');
    fetch('/api/fuelPrice')
      .then(response => response.json())
      .then(data => {
        console.log('API response:', data);
        setFuelPrice(data.fuelPrice);
      })
      .catch(error => {
        console.error('Error fetching fuel prices:', error);
      });
  }, []);


  return (
    <div>
      <h1>Fuel Prices in Pakistan</h1>
      {fuelPrice ? (
        <div>
          <p>Petrol: {fuelPrice.petrolPrice}</p>
          <p>Diesel: {fuelPrice.dieselPrice}</p>
        </div>
      ) : (
        <p>Loading fuel prices...</p>
      )}
    </div>
  );
}
