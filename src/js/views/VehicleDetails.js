import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { Context } from '../store/appContext';

import '../../styles/demo.css';

export const VehicleDetails = ({
  name,
  cargo_capacity,
  consumables,
  cost_in_credits,
  crew,
  passengers,
}) => {
  const { id } = useParams();
  const [detailVehicles, setDetailVehicles] = useState({});

  useEffect(() => {
    const fetchDetailVehicles = async () => {
      try {
        const response = await fetch(
          `https://www.swapi.tech/api/vehicles/${id}`
        );
        const data = await response.json();
        console.log('Fetched data Vehicle Details:', data);
        setDetailVehicles(data.result.properties);
      } catch (error) {
        console.error('Error fetching Vehicle Details:', error);
      }
    };

    fetchDetailVehicles();
  }, []);

  return (
    <div className="card mb-3 container" style={{ width: '45rem' }}>
      <div className="row g-0">
        <div className="col">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
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
            <h2 className="card-title">{detailVehicles.name}</h2>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur rem neque quidem.
            </p>
          </div>
        </div>
        <span className="border-divisor mt-5"></span>
        <div className="container mt-1 text-danger">
          <p className="card-text">{`Cargo Capacity: ${detailVehicles.cargo_capacity}`}</p>
          <p className="card-text">{`Consumables: ${detailVehicles.consumables}`}</p>
          <p className="card-text">{`Cost in Credits: ${detailVehicles.cost_in_credits}`}</p>
          <p className="card-text">{`Crew: ${detailVehicles.crew}`}</p>
          <p className="card-text">{`Passengers: ${detailVehicles.passengers}`}</p>
        </div>
      </div>
    </div>
  );
};
