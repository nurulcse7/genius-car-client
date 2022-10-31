import React from 'react';

const ServiceCard = ({ service }) => {
  const { img, price, title } = service;
  return (
    <div className='card card-compact w-96 bg-base-100 shadow-xl'>
      <figure>
        <img src={img} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>

        <div className='card-actions '>
          <p className='text-2xl text-orange-600 font-semibold'>
            Price: ${price}
          </p>
          <button className='btn btn-warning'>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
