import React from 'react';

import { Tile } from '../tile/Tile';

export const TileList = ({ tiles }) => {
  return (
    <div>
      {tiles.length > 0 &&
        tiles.map((tile, index) => <Tile key={index} tile={tile} />)}
    </div>
  );
};
