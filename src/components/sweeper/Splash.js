import React from 'react';

import { colors } from '../../consts';

export default function Splash({ win, numWet, rain, date, roll, setShowSplash, setNewGame }) {

  function localHandleDismissSplash() {
    setShowSplash(false);
    setNewGame(true);
  }
   let msg = '';
   if( roll === 4) {
  
    msg = '😎🌂'

  // 5. get two spare umbrellas every 10 rounds.
  }else if(roll > 0 && roll % 10 === 0){
    msg ='😎🌂🌂'
  }

  return win ? (
    <div style={styles.splash}>
      <span style={styles.emoji}>{msg === '' ? '😎' : msg}</span>
      <span style={styles.text2}>You avoided {numWet} rainy days</span>
      <button onClick={localHandleDismissSplash}>Keep Going!</button>
      
    </div>
  ) : (
    <div style={styles.splash}>
      <span style={styles.text1}>Game Over</span>
      <span style={{ fontSize: 64 }}>☔</span>
      <span style={styles.text2}>
        There was {rain}mm of rain on {date}
      </span>
    </div>
  );
}

const styles = {
  splash: {
    backgroundColor: colors.black,
    height: '100%',
    width: '100%',
    // width: Dimensions.get('window').width,
    position: 'absolute',
    zIndex: 9,
    display: 'grid',
    justifyContent: 'center',
    gridAutoFlow: 'row',
    justifyItems: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text1: { color: 'white', fontSize: 32, fontWeight: 'bold' },
  text2: { color: colors.orange, fontSize: 16, fontWeight: 'bold' },
  emoji: { fontSize: 32, margin: 20 },
};
