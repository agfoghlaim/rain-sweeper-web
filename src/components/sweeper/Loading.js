import React from 'react';

export default function Loading() {
  return <div style={styles.loadingWrap}>Loading</div>;
}

const styles = {
  loadingWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
