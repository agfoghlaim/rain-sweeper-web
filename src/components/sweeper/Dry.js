import React from 'react';

import { colors } from '../../consts';

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
 
}) {
  const { checked, date, numNastyNeighbours } = itemData;
  function localHandlePress(e) {
    if (gameOver) return;
    if (checked) return;
    console.log(e.type, e)
    e.preventDefault();

 

    // Right Click | just set flag.
    if (e.type === 'contextmenu') {
      if (gameOver) return;
      setFlagged(!flagged);
      return;
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
      handleDryClick(itemData);
    }
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      handleKeyboard(itemData, e);
    }
    return;
  }

  return (
    <div
      style={{
        backgroundColor: checked ? `${colors.gray}` : `${colors.white}`,
      }}
      id={itemData.id}
      className={classes.dryTile}
      onClick={localHandlePress}
      onContextMenu={localHandlePress}
      tabIndex={itemData.i === 0 ? '0' : '-1'}
      className={`${classes.drySquare} ${
        itemData.checked ? classes['checked'] : ''
      }`}
      onKeyDown={(e) => localHandleKeyboard(e)}
    >
      <>
        <div className={classes.date}>{date}</div>

        {checked && <Nasties numNastyNeighbours={numNastyNeighbours} />}

        {flagged && !checked && !gameOver && <Umbrella />}
        {/* {flagged && !checked && !gameOver && <p>umb</p>}  */}
      </>
    </div>
  );
}
