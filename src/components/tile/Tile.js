import React from 'react';

export const Tile = ({ index, tile }) => {
  let proprties = [];
  for (const key in tile) proprties.push(key);

  return (
    <div className={`tile-container`} id={`${index}-tile`}>
      {proprties.map((value, index) => (
        <p key={index} className={`${index === 0 ? 'title-title ' : ''}title`}>
          {value} : {tile[value]}
        </p>
      ))}
      <button
        className='close'
        onClick={() => {
          document.getElementById(`${index}-tile`).remove();
        }}
      >
        <i className='fa fa-times'></i>
      </button>
    </div>
  );
};
