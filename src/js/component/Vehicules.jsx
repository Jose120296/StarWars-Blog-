import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Vehicle = ({ name, id }) => {
  const { actions } = useContext(Context);

  return (
    <div className="card-group">
      <div className="card" style={{ width: '18rem' }}>
        <img
          src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
          className="card-img-top"
          alt="..."
          onError={(e) => {
            e.target.src =
              'https://starwars-visualguide.com/assets/img/placeholder.jpg';
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="detail-fav-btn">
            <Link to={`/vehicle-details/${id}`}>
              <button className="btn btn-outline-primary">
                Vehicle Details!
              </button>
            </Link>
            <button
              className="btn btn-outline-danger
          "
              onClick={() => {
                actions.incrementFavoritesCounter({
                  uid: id,
                  name,
                  type: 'vehicle',
                });
                console.log('You picked a favorite vehicle!!');
              }}
            >
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
