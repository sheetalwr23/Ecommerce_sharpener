import React from "react";

const Card = ({ imagePath, name, description, price, _id, removeCartItem }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={`${process.env.REACT_APP_API}${imagePath}`}
            className="img-fluid rounded-start"
            alt={name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{description.substring(0, 30)}</p>
            <p className="card-text">Price: {price}</p>
            <button
              className="btn btn-danger"
              onClick={() => removeCartItem(_id)}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
