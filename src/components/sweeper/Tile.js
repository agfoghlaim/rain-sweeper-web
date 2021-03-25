import React, { useState, useEffect } from 'react';


import WetTile from './Wet';
import DryTile from './Dry';

export default function Tile({
  data,
  gameOver,
  handleDryClick,
  handleWetClick,
  handleKeyboard,
  numLives,
  setNumLives,
  classes,
  setTheFocus
}) {

  // TODO: maybe these should stay here?
  const [flagged, setFlagged] = useState(false);

  useEffect(() => {
    if (!gameOver) return;
    setFlagged(false);
  }, [gameOver, flagged]);
  
  return data.rain === 0  ? (
		// <div>dry</div>
    <DryTile
    itemData={data}
    handleDryClick={handleDryClick}
    gameOver={gameOver}
    setFlagged={setFlagged}
    flagged={flagged}
    classes={classes}
    setTheFocus={setTheFocus}
    handleKeyboard={handleKeyboard}

    />
  ) : (

    <WetTile
      itemData={data}
      handleWetClick={handleWetClick}
      gameOver={gameOver}
      setFlagged={setFlagged}
      flagged={flagged}
      numLives={numLives}
      setNumLives={setNumLives}
      classes={classes}
      setTheFocus={setTheFocus}
      handleKeyboard={handleKeyboard}
    />
  );

}
