import React from 'react';

const PizzaCard = ({ imageUrl, ingredients, name, unitPrice }) => {
  return (
    <div className='flex m-10'>
      <div>
        <img
          src={imageUrl}
          alt={name}
        />
      </div>
      <div className='flex flex-col'>
        <span>{name}</span>
        <span>{ingredients.map((item) => item)}</span>
        <span>{unitPrice}</span>
      </div>
    </div>
  );
};

export default PizzaCard;
