import React from 'react';
import classes from './gameDets.module.scss';

export default function GameDets() {
  return (
    <div className={classes.gameDetsWrap}>
      <div className={classes.infoItem}>
        <span className={classes.text}>arrow keys select tiles.</span>
     
      </div>
      <div className={classes.infoItem}>
        <span className={classes.text}>spacebar or right click to add/remove umbrellas</span>
      </div>

      <div className={classes.infoItem}>
			<span className={classes.text}>enter reveals tiles</span>
      </div>
    </div>
  );
}
