import React from 'react';

import Umbrella from './Umbrella';

import { colors } from '../../consts';

export default function WetTile({
  itemData,
  flagged,
  setFlagged,
  handleWetClick,
  gameOver,
  numLives,
  setNumLives,
  classes,
  handleKeyboard,
}) {

  const { date, culprit } = itemData;
  function localHandlePress(e) {
    if (gameOver) return;
    let currentLives = numLives;
    if (currentLives > 0) {
      const update = currentLives - 1;
      setNumLives(update);
      setFlagged(true);
      return;
    }
    // Right Click | just set flag.
    if (e.type === 'contextmenu') {
      e.preventDefault();
      if (gameOver) return;
      setFlagged(!flagged);
      return;
    } else {
    
      handleWetClick(itemData);
    }
  }

  function localHandleKeyboard(e) {
    e.preventDefault();
    if (e.key === 'Escape') {
      document.activeElement.parentElement.focus();
    }

    if (e.keyCode === 32) {
      // space
      setFlagged(!flagged);
      return;
    }
    if (e.key === 'Enter') {
      handleWetClick(itemData, e);
    }
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      handleKeyboard(itemData, e);
    }
    return;
  }
  return (
    <div
      style={{
        backgroundColor: culprit ? colors.red : colors.blue,
        //background: `${itemData.checked ? 'none' : colors.white}`,
      }}
      tabIndex={itemData.id === 0 ? '0' : '-1'}
      className={classes.wetTile}
      onClick={localHandlePress}
      onContextMenu={localHandlePress}
      onKeyDown={(e) => localHandleKeyboard(e)}
      id={itemData.id}
      // onLongPress={handleLongPress}
    >
      <>
        <span className={classes.date}>{date}</span>
        {flagged && !gameOver && <Umbrella />}
        {gameOver && <span>🌧️</span>}
      </>
    </div>
  );
}
