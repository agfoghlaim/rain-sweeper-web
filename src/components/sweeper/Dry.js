import React from 'react';

import Nasties from './Nasties';
import Umbrella from './Umbrella';

export default function DryTile({
  itemData,
  flagged,
  setFlagged,
  handleDryClick,
  handleKeyboard,
  gameOver,
  classes,
  empty,
  firstTileRef,
}) {
  const { checked, date, numNastyNeighbours } = itemData;

  function localHandlePress(e) {
    if (gameOver) return;
    if (checked) return;

    e.preventDefault();

    // Right Click | just set flag.
    if (e.type === 'contextmenu') {
      if (gameOver) return;
      setFlagged(!flagged);
      return;
    } else if (e.type === 'click' && flagged) {
      return;

      // for left click on non flagged tile.
    } else {
      handleDryClick(itemData);
    }
  }

  function localHandleKeyboard(e) {
    e.preventDefault();
    if (e.key === 'Escape') {
      document.activeElement.parentElement.focus();
    }
    if (e.keyCode === 32) {
      setFlagged(!flagged);
      return;
    }
    if (e.key === 'Enter') {
      if (flagged) return;
      handleDryClick(itemData);
    }
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      handleKeyboard(itemData, e);
    }
    return;
  }


  return (
    <div
      role="button"
      style={{
        backgroundColor: checked ? `var(--gray)` : `var(--white)`,
      }}
      id={itemData.id}
      onClick={localHandlePress}
      // ref will be null unless itemData.id === 0
      ref={firstTileRef}
      onContextMenu={localHandlePress}
      tabIndex={itemData.id === 0 ? '0' : '-1'}
      className={`${classes.tile} ${
        itemData.checked ? classes['checked'] : ''
      }`}
      onKeyDown={(e) => localHandleKeyboard(e)}
    >
      {!empty ? (
        <>
          <div className={classes.date}>{date}</div>

          {checked && (
            <Nasties
              classes={classes}
              numNastyNeighbours={numNastyNeighbours}
            />
          )}

          {flagged && !checked && !gameOver && <Umbrella />}
          {/* {flagged && !checked && !gameOver && <p>umb</p>}  */}
        </>
      ) : (
        <span
          style={{
            display: 'grid',
            alignSelf: 'center',
            justifySelf: 'center',
          }}
          role="img"
          aria-label="questionmark"
        >
          ❔
        </span>
      )}
    </div>
  );
}
