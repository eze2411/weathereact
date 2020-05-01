import React from 'react';
import LocationList from "./components/LocationList";
import './App.css';

const cities = [
    'Buenos Aires,AR',
    'Moreno,AR',
    'Campinas,BR'
];

function App() {
  return (
    <div className="App">
        <LocationList cities={cities} />
    </div>
  );
}

export default App;
