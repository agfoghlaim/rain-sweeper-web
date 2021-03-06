import React from 'react';
import classes from './gameDets.module.scss';

export default function GameDets() {
  return (
    <div className={classes.gameDetsWrap}>
      <div className={classes.infoItem}>
        <span className={classes.text}>Use arrow keys to select tiles</span>
     
      </div>
      <div className={classes.infoItem}>
        <span className={classes.text}>Use spacebar or right click to add/remove umbrellas</span>
      </div>

      <div className={classes.infoItem}>
			<span className={classes.text}>Press enter to reveal tiles</span>
      </div>
    </div>
  );
}
