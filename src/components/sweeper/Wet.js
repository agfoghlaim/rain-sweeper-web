import React from 'react';

import Umbrella from './Umbrella';

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
  empty,
  firstTileRef,
}) {
  const { date, culprit } = itemData;
  function localHandlePress(e) {
    if (gameOver) return;

    // Right Click | just set flag.
    if (e.type === 'contextmenu') {
      e.preventDefault();
      if (gameOver) return;
      setFlagged(!flagged);
      return;

      // Left Click
    }
    // don't do anything for left click if tile is flagged.
    else if (e.type === 'click') {
      if (flagged) return;

      // if there are lives (umbrellas) left, decrement, flag & return.
      let currentLives = numLives;
      if (currentLives > 0) {
        const update = currentLives - 1;
        setNumLives(update);
        setFlagged(true);
        return;
      }

      // if left click & no lives left
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
      if (flagged) return;

      // if there are lives (umbrellas) left, decrement, flag & return.
      let currentLives = numLives;
      if (currentLives > 0) {
        const update = currentLives - 1;
        setNumLives(update);
        setFlagged(true);
        return;
      }

      // if left click & no lives left
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
        backgroundColor: culprit ? 'var(--red)' : 'var(--white)',
        //background: `${itemData.checked ? 'none' : colors.white}`,
      }}
      tabIndex={itemData.id === 0 ? '0' : '-1'}
      className={`${classes.tile}`}
      // ref will be null unless itemData.id === 0
      ref={firstTileRef}
      onClick={localHandlePress}
      onContextMenu={localHandlePress}
      onKeyDown={(e) => localHandleKeyboard(e)}
      id={itemData.id}
    >
      {!empty ? (
        <>
          <span className={classes.date}>{date}</span>
          {flagged && !gameOver && <Umbrella />}
          {gameOver && <span>🌧️</span>}
        </>
      ) : (
        <span
          style={{
            display: 'grid',
            alignSelf: 'center',
            justifySelf: 'center',
          }}
        >
          ❔
        </span>
      )}
    </div>
  );
}
