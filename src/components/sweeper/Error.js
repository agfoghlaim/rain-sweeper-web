import React from 'react';


import { colors } from '../../consts';

export default function Error({ msg, tryAgain }) {
  return (
    <div style={styles.loadingWrap}>
      <span style={styles.emoji}>🤔</span>
      <span style={styles.text}>{msg}...</span>
      <div style={styles.tryAgainBtn}>
        <button
          onClick={tryAgain}
        >Try again</button>
      </div>
    </div>
  );
}

const styles = {
  loadingWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emoji: {
    fontSize: 20,
  },
  text: {
    fontSize: 14,
    color: colors.red,
    marginVertical: 10,

    padding: 3,
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontFamily: 'monospace',
  },
  tryAgainBtn: {
    marginVertical: 20,
  },
};
