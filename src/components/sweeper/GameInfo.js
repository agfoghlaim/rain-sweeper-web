import React, { useState, useEffect, useRef } from 'react';

export default function GameInfo({
  gameOver,
  newGame,
  score,
  setNewGame,
  win,
  roll,
  numLives,
  error,
  loading,
}) {
  const lives = useRef(numLives);
  const [emoji, setEmoji] = useState({ emoji: '🤔', desc: 'thinking emoji' });


  useEffect(() => {
    if(!numLives) return;
    if (numLives < lives.current) {
      setEmoji({ emoji: '🙄', desc: 'eyeroll emoji' });

      const timer = setTimeout(
        () => setEmoji({ emoji: '🤔', desc: 'thinking emoji' }),
        300
      );

      // Clean up setTimeout.
      return function cleanup() {
        if (timer) {
          clearTimeout(timer);
        }
      };
    }
  }, [numLives, lives]);

  function decideEmoji() {
    if (gameOver && typeof newGame === 'undefined') {
      return {
        emoji: '😴',
        desc: 'sleeping emoji',
      };
    } else if (!gameOver && typeof newGame === 'boolean') {
      return emoji;
    } else if (win && gameOver && typeof newGame === 'boolean') {
      return { emoji: '😀', desc: 'grinning emoji' };
    } else if (
      typeof newGame === 'boolean' &&
      typeof win === 'boolean' &&
      gameOver
    ) {
      return { emoji: '😒', desc: 'sad emoji' };
    } else {
      return '';
    }
  }

  return (
    <div style={styles.gameInfo}>
      <div>
        <h1
          style={{
            margin: '0rem 1rem',
            color: 'var(--black)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '-1px',
          }}
          className="text_small"
        >
          Galway Rain Sweeper
        </h1>
      </div>
      <div style={styles.gameTemp}>
        <span style={styles.score}>Score: {score}</span>
        <span
          style={{ fontSize: '1.563rem' }}
          role="img"
          aria-label={decideEmoji().desc}
        >
          {' '}
          {decideEmoji().emoji}
        </span>

        {!gameOver ? (
          <>
            <span style={styles.umbrellas}>
              {numLives < 4 && numLives > 0
                ? Array.from(Array(numLives)).map((_, i) => '🌂')
                : numLives === 0
                ? '⚠️'
                : `🌂 x ${numLives}`}
            </span>
            <span style={styles.round}>Round: {roll + 1}</span>
          </>
        ) : (
          <>
            <span style={styles.umbrellas}></span>
            <button
              id="0"
              style={{ display: 'grid', justifySelf: 'flex-end' }}
              disabled={Boolean(error) || loading}
              onClick={() => setNewGame(true)}
            >
              {win ? 'Next Round' : 'New Game'}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  gameInfo: {
    display: 'grid',
    gridTemplateRows: '1rem 1fr',
    borderRadius: '0.2rem',
    border: '2px inset var(--white)',
    alignContent: 'flex-start',
    padding: '0.5rem 0rem',
  },
  gameTemp: {
    justifyItems: 'center',
    display: 'grid',
    gridAutoFlow: 'column',
    // minHeight: '4rem',
    margin: '0rem 1rem',
    backgroundColor: 'var(--gray)',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    // justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'flex-end',
  },
  score: {
    fontFamily: 'monospace',
    fontWeight: '700',
    padding: '0.2rem',
    fontSize: '1rem',
    color: 'var(--red)',
    backgroundColor: 'var(--white)',
    borderRadius: '0.2rem',
    display: 'grid',
    justifySelf: 'flex-start',
  },
  round: {
    fontFamily: 'monospace',
    fontWeight: '700',
    fontSize: '1rem',
    padding: '0.2rem',
    color: 'var(--white)',
    backgroundColor: 'var(--red)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: '0.2rem',
    display: 'grid',
    justifySelf: 'flex-end',
  },
};
