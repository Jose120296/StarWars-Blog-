import React, { useEffect, useState } from 'react';
import '../../styles/home.css';
import { Character } from '../component/Characters.jsx';
import { Planet } from '../component/Planets.jsx';
import { Vehicle } from '../component/Vehicules.jsx';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch('https://www.swapi.tech/api/people/');
        const data = await response.json();
        console.log('Fetched data Characters:', data);
        setCharacters(data.results);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await fetch('https://www.swapi.tech/api/planets/');
        const data = await response.json();
        console.log('Fetched data Planets:', data);
        setPlanets(data.results);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, []);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await fetch('https://www.swapi.tech/api/vehicles/');
        const data = await response.json();
        console.log('Fetched data Vehicles:', data);
        setVehicles(data.results);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <div className="characters-container container">
      <h2 className="container mt-1">Characters</h2>
      <div className="card-container">
        {characters.map((characterData) => (
          <Character
            id={characterData.uid}
            key={characterData.uid}
            name={characterData.name}
          />
        ))}
      </div>

      <h2 className="container mt-4">Planets</h2>
      <div className="card-container">
        {planets.map((planetData) => (
          <Planet
            id={planetData.uid}
            key={planetData.uid}
            name={planetData.name}
          />
        ))}
      </div>

      <h2 className="container mt-4">Vehicles</h2>
      <div className="card-container">
        {vehicles.map((vehicleData) => (
          <Vehicle
            id={vehicleData.uid}
            key={vehicleData.uid}
            name={vehicleData.name}
          />
        ))}
      </div>
    </div>
  );
};
