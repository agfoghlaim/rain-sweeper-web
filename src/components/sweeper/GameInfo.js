import React, { useState, useEffect } from 'react';

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
  loading,
}) {
  // const initialScale = useState(new Animated.Value(1))[0];

  // function drawAttentionToNextRoundButton() {
  //   Animated.loop(
  //     Animated.spring(initialScale, {
  //       toValue: 1.02,
  //       friction: 1,
  //       tension: 1,
  //       duration: 3000,
  //       useNativeDriver: true,
  //     })
  //   ).start();
  // }

  // useEffect(() => {
  //   if (!gameOver) return;

  //   if (win) {
  //     drawAttentionToNextRoundButton();
  //   }
  // }, [gameOver]);

  function decideEmoji() {
    if (gameOver && typeof newGame === 'undefined') {
      return '😴';
    } else if (!gameOver && typeof newGame === 'boolean') {
      return '🤔';
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
            {numLives < 4
              ? Array.from(Array(numLives)).map((_, i) => '🌂')
              : `🌂 x ${numLives}`}
          </span>
          <span style={styles.round}>Round: {roll + 1}</span>
        </>
      ) : (
        <button
          disabled={Boolean(error) || loading}
          onClick={() => setNewGame(true)}
        >
          {win ? 'Next Round' : 'New Game'}
        </button>
      )}
    </div>
  );
}

const styles = {
  gameInfo: {
    flex: 1,
    minHeight: 64,
    padding: 16,
    backgroundColor: colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
    borderRadius: 4,
  },
  score: {
    fontFamily: 'monospace',
    fontWeight: '700',
    fontSize: 14,
    color: colors.red,
    backgroundColor: colors.white,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  round: {
    fontFamily: 'monospace',
    fontWeight: '700',
    fontSize: 14,
    color: colors.white,
    backgroundColor: colors.red,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
};
