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

  let msg = { emojis: '', desc: '' };

  // one spare umbrella at round 5.
  if (roll === 5) {
    msg = { emojis: '😎🌂', desc: 'sunglasses and closed umbrella' };

    // get two spare umbrellas every 10 rounds.
  } else if (roll > 0 && roll % 10 === 0) {
    msg = { emojis: '😎🌂🌂', desc: 'sunglasses and 2 closed umbrellas' };
  }

  return win ? (
    <div className={classes.splash}>
      <span
        role="img"
        aria-label={msg.emojis === '' ? 'sunglasses' : msg.desc}
        className={classes.emoji}
      >
        {msg.emojis === '' ? '😎' : msg.emojis}
      </span>
      <span className={classes.text2}>You avoided {numWet} rainy days</span>

      {/* This autoFocus attr has an eslint warning. TODO find proper way to move focus to a modal or ignore */}
      <button autoFocus={true} onClick={localHandleDismissSplash}>
        Keep Going!
      </button>
    </div>
  ) : (
    <div className={classes.splash}>
      <span className={classes.text1}>Game Over</span>
      <span
        role="img"
        aria-label="umbrella with rain"
        className={classes.emoji}
      >
        ☔
      </span>
      <span className={classes.text2}>
        There was {rain}mm of rain on {date}
      </span>
    </div>
  );
}
