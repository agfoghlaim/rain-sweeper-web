import React from 'react';

import { colors } from '../../consts';

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
