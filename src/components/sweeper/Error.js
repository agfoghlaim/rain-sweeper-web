import React from 'react';

export default function Error({ msg, tryAgain }) {
  return (
    <div style={styles.loadingWrap}>
      <span role="img" aria-label="thinking emoji" style={styles.emoji}>🤔</span>
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
    color: 'var(--red)',
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
