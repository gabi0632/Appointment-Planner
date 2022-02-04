import React from 'react';

export const Tile = ({ tile }) => {
  let proprties = [];
  for (const key in tile) proprties.push(key);
  return (
    <div className='tile-container'>
      {proprties.map((value, index) => (
        <p key={index} className={`${index === 0 ? 'title-title ' : ''}title`}>
          {value} : {tile[value]}
        </p>
      ))}
    </div>
  );
};
