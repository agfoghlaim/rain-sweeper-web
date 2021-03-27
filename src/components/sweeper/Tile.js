import React, { useState, useEffect, useRef } from 'react';

import classes from './tile.module.scss';
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
  empty,
}) {

  const [flagged, setFlagged] = useState(false);
  const firstTileRef = useRef(null);

  useEffect(() => {
    if (!gameOver) return;
    setFlagged(false);
  }, [gameOver, flagged]);

  // Focus the first tile when a new game loads.
  // TODO: eslint is warning about this...
  useEffect(() => {
    if (firstTileRef.current) {
      firstTileRef.current.focus();
    }
  }, []);


  return data.rain === 0 ? (
    <DryTile
      itemData={data}
      handleDryClick={handleDryClick}
      gameOver={gameOver}
      setFlagged={setFlagged}
      flagged={flagged}
      classes={classes}
      handleKeyboard={handleKeyboard}
      empty={empty}

      /* So that the first tile is auto focused when 'New Game' button is pressed...'empty' represents the empty tiles on load before new game is pressed there's no need to autofocus in this case.
      if not empty (ie. new Game button pressed) set the first tile on the board to firstTileRef. useEffect above will focus it.
      */
     firstTileRef={!empty && data.id === 0 ? firstTileRef : null}
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
      handleKeyboard={handleKeyboard}
      empty={empty}
    />
  );
}
