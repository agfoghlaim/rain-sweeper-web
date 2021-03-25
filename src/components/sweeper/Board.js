import React, {
  useState,
  useEffect,
  useCallback,
  useReducer,
  useRef,
} from 'react';
import classes from './board.module.scss';
import { useStaticQuery } from 'gatsby';
import {
  prepData,
  shouldCheckInThisDirection,
  getNeighbourToThe,
  setCheckedToTrue,
  checkGameOver,
  setCulprit,
} from '../../util';

import Tile from './Tile';
import GameInfo from './GameInfo';
import Splash from './Splash';
import Loading from './Loading';
import Error from './Error';

import {
  colors,
  NUM_DAYS_IN_ROW,
  NUM_DAYS_IN_GAME,
  DIRECTIONS,
} from '../../consts';

import gameReducer from '../../reducers/gameReducer';

export default function Board() {
  // There are way more wet days so to make game winnable get wet/dry days in a nice proportion.

  const winnable = useStaticQuery(
    graphql`
      query winnableQuery {
        dry: allRainyDay(filter: { rain: { eq: 0 } }, limit: 500) {
          nodes {
            rain
            date
          }
        }
        wet: allRainyDay(
          filter: { rain: { lt: 50, gt: 10 } }
          limit: 100
          sort: { fields: rain, order: DESC }
        ) {
          nodes {
            date
            rain
          }
        }
      }
    `
  );

  console.log("first one is ", winnable)

  /**
   *
   * When a <Dry> day is clicked, it's tricky to check neighbouring days and manage re-renders. Push all neighbours to be checked/revealed in here and update state all at once.
   *
   */
  const KEEP_TRACK = [];

  const initialState = {
    roll: 0,
    score: 0,
    loading: true,
    error: '',
    culprit: null,
    allData: [], // all data shuffled & with numNastyNeighbours- ratio is 1:5 wet:dry
    data: [], // game data, .length === NUM_DAYS_IN_GAME
  };

  const [realData, dispatch] = useReducer(gameReducer, initialState);
  const [newGame, setNewGame] = useState(undefined);
  const [gameOver, setGameOver] = useState(true);
  const [numLives, setNumLives] = useState(3); // it's reset anyway...
  const [win, setWin] = useState(undefined);
  const [showSplash, setShowSplash] = useState(false);
  const splashTimer = useRef(null);
  const [numWet, setNumWet] = useState(null);
  const skipRef = useRef(null);
  const go = useCallback(async function load() {
    try {
      console.log('winnablessss', winnable);
      const allData = await prepData(winnable);
      // console.log('winn', winnable);
      // console.log('have it?', allData);
      dispatch({ type: 'FETCH', error: '', payload: allData });
    } catch (err) {
      console.log(err);
      dispatch({ type: 'FETCH_ERROR', error: 'Error fetching data' });
    }
  }, []);

  // Fetch data manually. In the case of no internet when the app loads, this can be called from the error component.
  function tryAgain() {
    dispatch({ type: 'FETCHING', error: '', loading: true });
    go();
  }
  // #region useEffect

  // Fetch data on load
  useEffect(() => {
    dispatch({ type: 'FETCHING', error: '', loading: true });
    go();
  }, []);

  // Shuffle when newGame changes.
  useEffect(() => {
    if (!newGame) return;
    setGameOver(false); // okay?
    setWin(false);
    dispatch({ type: 'SHUFFLE', payload: realData.allData });

    setNewGame(false);
  }, [newGame]);

  // Get num wet days for score when newGame changes.
  useEffect(() => {
    const wetDays = realData.data.filter((item) => item.rain > 0);
    if (wetDays) {
      setNumWet(wetDays.length);
    }
  }, [newGame, setNumWet, realData.data]);

  // timeout to hide splash set in handle lose game
  useEffect(() => {
    if (!showSplash) return;

    // Remove you lost splash after 2 seconds.
    splashTimer.current = setTimeout(() => setShowSplash(false), 3000);

    // Clean up setTimeout.
    return function cleanup() {
      if (splashTimer.current) {
        clearTimeout(splashTimer.current);
        splashTimer.current = null;
      }
    };
  }, [showSplash, setShowSplash, splashTimer.current]);

  // Handle roll everytime a game ends.
  useEffect(() => {
    if (!gameOver) return;

    // Add the number of wet days avoided in this round to the total score
    // DOING...
    const currentScore = Number(realData.score);
    const updateScore = currentScore + numWet * 10; // more exciting.

    if (isNaN(updateScore)) return;
    dispatch({ type: 'SCORE', payload: updateScore });

    // Game is lost, reset roll & score to 0, numLives to 3.
    if (gameOver && !win) {
      dispatch({ type: 'ROLL', payload: 0 });
      dispatch({ type: 'SCORE', payload: 0 });
      setNumLives(3);
    }

    // Game is won.
    if (gameOver && win) {
      // 1. Increment roll
      const roll = realData.roll;
      dispatch({ type: 'ROLL', payload: roll + 1 });

      //  2. Show 'X in a row' splash.
      setShowSplash(true);

      // 3. Set timesout to remove splash.
      splashTimer.current = setTimeout(() => {
        setShowSplash(false);
      }, 1500);

      // 4. get one spare umbrella on fifth round
      if (roll === 4) {
        let currentLives = numLives;
        setNumLives(currentLives + 1);

        // 5. get two spare umbrellas every 10 rounds.
      } else if (roll > 0 && roll % 9 === 0) {
        let currentLives = numLives;
        setNumLives(currentLives + 2);
      }

      // Clean up timeout.
      return function cleanup() {
        if (splashTimer.current) {
          clearTimeout(splashTimer.current);
        }
      };
    }
  }, [win, gameOver]);

  // Reveal all tiles on game over.
  useEffect(() => {
    if (!gameOver) return;

    // Reveal all tiles by setting all realData.data.checked = true.
    const revealed = setCheckedToTrue(realData.data);
    dispatch({ type: 'REVEAL_ALL', payload: revealed });
  }, [gameOver]);

  // Check if game should be over. This is for successful scenario. <Wet/> sets setGame(false) if a rainy day is clicked.
  useEffect(() => {
    if (gameOver) return;

    // Check if game should be over (ie. all dry days checked).
    const isGameOver = checkGameOver(realData.data);
    if (isGameOver) {
      setGameOver(true);
      setWin(true);
    }
  }, [setGameOver, gameOver, realData.data, setWin]);

  //#endregion

  //#region handlers

  function handleKeyboard(_, e) {
    e.preventDefault();
    if (e.key === 'ArrowDown') {
      setTheFocus(+document.activeElement.id).down();
    }
    if (e.key === 'ArrowUp') {
      setTheFocus(+document.activeElement.id).up();
    }
    if (e.key === 'ArrowRight') {
      setTheFocus(+document.activeElement.id).right();
    }
    if (e.key === 'ArrowLeft') {
      setTheFocus(+document.activeElement.id).left();
    }
  }

  function setTheFocus(current) {
    return {
      down: () => {
        const swichFocusTo = document.getElementById(current + NUM_DAYS_IN_ROW);
        console.log("switch to ", swichFocusTo)
        if (!swichFocusTo) return;
        console.log("didnt ree", swichFocusTo)
        swichFocusTo.focus();
      },
      up: () => {
        const swichFocusTo = document.getElementById(current - NUM_DAYS_IN_ROW);
        if (!swichFocusTo) return;
        swichFocusTo.focus();
      },
      left: () => {
        const swichFocusTo = document.getElementById(current - 1);
        if (!swichFocusTo) return;
        swichFocusTo.focus();
      },
      right: () => {
        const swichFocusTo = document.getElementById(current + 1);
        if (!swichFocusTo) return;
        swichFocusTo.focus();
      },
    };
  }

  function handleWetClick(data) {
    // let currentLives = numLives;
    // if(currentLives > 1 ) {
    //   const update = currentLives - 1;
    //   setNumLives(update);
    //   return;
    // }
    setGameOver(true);

    // Set which day done it.
    const badDay = data.id;

    // Map data and add a .culprit = true to the day that lost the game.
    const updated = setCulprit(realData.data, badDay);

    // Show splash. 'Game Over' splash will show because win has not been set to true.
    setShowSplash(true);

    // Update state. Set realData.data[badDay].culprit = true.
    dispatch({ type: 'CHECK_TILE', payload: updated });

    // Update state. Also set realData.culprit = badDay.
    dispatch({ type: 'CULPRIT', payload: badDay });
  }

  function doTheUpdate() {
    // Update state with KEEP_TRACK. Set clicked <Dry/> to checked as well as any of it's neighbours.
    const copy = realData.data;
    const updated = copy.map((item) => {
      if (KEEP_TRACK.includes(item.id)) {
        return {
          ...item,
          checked: true,
        };
      }
      return item;
    });
    dispatch({ type: 'CHECK_TILE', payload: updated });
  }

  function handleDryClick(datum) {
    const isChecked = KEEP_TRACK.filter((w) => w === datum.id);

    // Return if this day has already been checked.
    if (isChecked.length) return;

    const numNastyNeighbours = realData.data[datum.id].numNastyNeighbours;

    // If this day has MORE than ZERO rainy days (bombs) surrounding it, push it into KEEP_TRACK so it won't get checked again. Then update state and return.
    if (numNastyNeighbours !== 0) {
      KEEP_TRACK.push(datum.id);

      doTheUpdate(KEEP_TRACK);
      return;
    }

    // If this day has ZERO rainy days surrounding it, also push it into KEEP_TRACK so it won't get checked again. Also send it to checkNeighbour() to 'click' on it's surrounding days.
    KEEP_TRACK.push(datum.id);
    checkNeighbour(datum);

    // If we get to here, the original day that was clicked on & all it's relevant neighbours are in KEEP_TRACK array.
    doTheUpdate(KEEP_TRACK);

    function checkNeighbour(datum) {
      // Find days in each direction, 'click' on them.
      for (const direction of DIRECTIONS) {
        if (shouldCheckInThisDirection(datum.id)[direction]()) {
          const thisOne = getNeighbourToThe(
            datum.id,
            direction,
            NUM_DAYS_IN_GAME,
            NUM_DAYS_IN_ROW
          );

          handleDryClick(realData.data[thisOne]);
        }
      }
    }
  }
  //#endregion handlers

  function renderTiles() {
    const data = realData.data.slice(0, NUM_DAYS_IN_GAME);

    return data.map((d, i) => {
      return (
        <Tile
          key={d.date}
          key={d.id}
          data={d}
          classes={classes}
          handleWetClick={handleWetClick}
          handleDryClick={handleDryClick}
          gameOver={gameOver}
          numLives={numLives}
          setNumLives={setNumLives}
          setTheFocus={setTheFocus}
          handleKeyboard={handleKeyboard}
        />
      );
    });
  }

  return (
    <div className={classes.gameWrap}>
      {showSplash && win && (
        <Splash numWet={numWet} win={win} roll={realData.roll} />
      )}
      {showSplash && !win && (
        <Splash
          win={win}
          roll={realData.roll}
          rain={realData.data[realData.culprit].rain}
          date={realData.data[realData.culprit].date}
        />
      )}

      <GameInfo
        score={realData.score}
        gameOver={gameOver}
        setNewGame={setNewGame}
        newGame={newGame}
        win={win}
        roll={realData.roll}
        numLives={numLives}
        error={realData.error}
        loading={realData.loading}
      />
   

      <div
        tabIndex="0"
        ref={skipRef}
        className={classes.tileGrid}
        style={{ gridTemplateColumns: `repeat(${NUM_DAYS_IN_ROW}, 3.6rem)` }}
      >
        {!!realData.data &&
        !!realData.data.length & (typeof win === 'boolean') ? (
          renderTiles()
        ) : !realData.loading && realData.error !== '' ? (
          <Error msg={realData.error} tryAgain={tryAgain} />
        ) : realData.loading ? (
          <Loading />
        ) : null}
      </div>
    </div>
  );
}

