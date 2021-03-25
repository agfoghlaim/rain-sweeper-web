import React, { useState, useEffect } from 'react';



export default function Umbrella({}) {
  // const initialScale = useState(new Animated.Value(4))[0];

  // // Animate in.
  // useEffect(() => {
  //   feedBackWhenUmbrellaAdded();
  // }, []);

  // function feedBackWhenUmbrellaAdded() {
  //   Animated.spring(initialScale, {
  //     toValue: 1,
  //     friction: 4,
  //     tension: 4,
  //     duration: 100,
  //     useNativeDriver: true,
  //   }).start();
  // }
  return (
    <div
      style={{
        // transform: [
        //   { scale: initialScale },
        //   { perspective: 1000 }, // react native docs says: without this line this Animation will not render on Android while working fine on iOS
        // ],
      }}
    >
      <span>☂️</span>
    </div>
  );
}
