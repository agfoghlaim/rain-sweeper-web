import React, { useState, useEffect, useRef } from 'react';

import { colors } from '../../consts';

export default function GameInfo({
  gameOver,
  newGame,
  score,
  setNewGame,
  win,
  roll,
  numLives,
  error,
  loading
}) {
  const lives = useRef(numLives);
  const [emoji, setEmoji] = useState('🤔')
  useEffect(()=>{
    if(numLives < lives.current){
      setEmoji('🙄');
      const timer = setTimeout(() => setEmoji('🤔'), 300);

      // Clean up setTimeout.
      return function cleanup() {
        if (timer) {
          clearTimeout(timer);
       
        }
      };
    }
  },[numLives, lives]);

  function decideEmoji() {
    if (gameOver && typeof newGame === 'undefined') {
      return '😴';
    } else if (!gameOver && typeof newGame === 'boolean') {
      //return '🤔';
      return emoji;
    } else if (win && gameOver && typeof newGame === 'boolean') {
      return '😀';
    } else if (
      typeof newGame === 'boolean' &&
      typeof win === 'boolean' &&
      gameOver
    ) {
      return '😒';
    } else {
      return '';
    }
  }

  return (
    <div style={styles.gameInfo}>
      <span style={styles.score}>Score: {score}</span>
      <span style={{ fontSize: 32 }}> {decideEmoji()}</span>

      {!gameOver ? (
        <>
          <span style={styles.umbrellas}>
            {numLives < 4 && numLives > 0
              ? Array.from(Array(numLives)).map((_, i) => '🌂')
              : numLives === 0 ? '⚠️'
              : `🌂 x ${numLives}`}
          </span>
          <span style={styles.round}>Round: {roll + 1}</span>
        </>
      ) : (
        <>
        <span style={styles.umbrellas}></span>
        <button
          disabled={Boolean(error) || loading}
          onClick={() => setNewGame(true)}
        >
          {win ? 'Next Round' : 'New Game'}
        </button>
        </>
      )}
    </div>
  );
}


const styles = {
  gameInfo: {
    display: 'grid',
    gridAutoFlow: 'column',
    minHeight: 64,
    padding: 16,
    backgroundColor: colors.gray,
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyContent: 'center',
    justifyItems: 'center',
    alignItems: 'center',
    marginVertical: 16,
    borderRadius: '0.2rem',
    border: '2px inset var(--white)',
  },
  score: {
    fontFamily: 'monospace',
    fontWeight: '700',
    padding: '0.2rem',
    fontSize: 14,
    color: colors.red,
    backgroundColor: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: '0.2rem',
  },
  round: {
    fontFamily: 'monospace',
    fontWeight: '700',
    fontSize: 14,
    padding: '0.2rem',
    color: colors.white,
    backgroundColor: colors.red,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: '0.2rem',
  },
};
