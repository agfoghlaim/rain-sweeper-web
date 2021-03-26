import React from 'react';
import classes from './splash.module.scss';
export default function Splash({
  win,
  numWet,
  rain,
  date,
  roll,
  setShowSplash,
  setNewGame,
}) {
  function localHandleDismissSplash() {
    setShowSplash(false);
    setNewGame(true);
  }
  let msg = '';
  if (roll === 5) {
    msg = '😎🌂';

    // 5. get two spare umbrellas every 10 rounds.
  } else if (roll > 0 && roll % 10 === 0) {
    msg = '😎🌂🌂';
  }

  return win ? (
    <div className={classes.splash}>
      <span className={classes.emoji}>{msg === '' ? '😎' : msg}</span>
      <span className={classes.text2}>You avoided {numWet} rainy days</span>
      <button autoFocus={true} onClick={localHandleDismissSplash}>
        Keep Going!
      </button>
    </div>
  ) : (
    <div className={classes.splash}>
      <span className={classes.text1}>Game Over</span>
      <span className={classes.emoji}>☔</span>
      <span className={classes.text2}>
        There was {rain}mm of rain on {date}
      </span>
    </div>
  );
}
