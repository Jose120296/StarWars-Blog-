import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Context } from '../store/appContext';

import '../../styles/demo.css';

export const PlanetDetails = ({
  name,
  climate,
  diameter,
  gravity,
  orbital_period,
  population,
}) => {
  const { id } = useParams();
  const [detailPlanets, setDetailPlanets] = useState({});

  useEffect(() => {
    const fetchDetailPlanets = async () => {
      try {
        const response = await fetch(
          `https://www.swapi.tech/api/planets/${id}`
        );
        const data = await response.json();
        console.log('Fetched data Planet Details:', data);
        setDetailPlanets(data.result.properties);
      } catch (error) {
        console.error('Error fetching planet details:', error);
      }
    };

    fetchDetailPlanets();
  }, []);

  return (
    <div className="card mb-3 container" style={{ width: '45rem' }}>
      <div className="row g-0">
        <div className="col">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
            className="img-fluid"
            alt="..."
            onError={(e) => {
              e.target.src =
                'https://starwars-visualguide.com/assets/img/placeholder.jpg';
            }}
          />
        </div>
        <div className="col">
          <div className="card-body">
            <h2 className="card-title">{detailPlanets.name}</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur rem neque quidem.
            </p>
          </div>
        </div>
        <span className="border-divisor mt-5"></span>
        <div className="container mt-1 text-danger">
          <p className="card-text">{`Climate: ${detailPlanets.climate}`}</p>
          <p className="card-text">{`Diameter : ${detailPlanets.diameter}`}</p>
          <p className="card-text">{` Gravity: ${detailPlanets.gravity}`}</p>
          <p className="card-text">{`Orbital Period: ${detailPlanets.orbital_period}`}</p>
          <p className="card-text">{`Population: ${detailPlanets.population}`}</p>
        </div>
      </div>
    </div>
  );
};
