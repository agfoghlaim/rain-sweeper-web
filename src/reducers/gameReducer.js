import {
  shuffleArray,
  addNumNastyNeighboursToShuffledData,
  setCheckedToFalse,
  sliceNumDaysInAGameConst,
  setCheckedToTrue
} from '../util';

export default function gameReducer(state, action) {
  switch (action.type) {
    case 'SET_FETCHED_DATA':

      return {
        loading: false,
        error: '',
        roll: 0,
        data: action.payload.gameData,
        allData: action.payload.allData,
        score: 0,
        numWet: 0
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case 'FETCHING':
      return {
        ...state,
        loading: action.loading,
        error: action.error,
      };
    case 'RESET_ROLL':
      return {
        ...state,
        roll: 0,
      };
    case 'CALC_WET_DAYS':

      const wetDays = state.data.filter((item) => item.rain > 0);

      return {
        ...state,
        numWet: wetDays.length || 0
      };
    case 'INCREMENT_ROLL':

      return {
        ...state,
        roll: state.roll +1,
      };

    case 'RESET SCORE':
      return {
        ...state,
        score: 0,
      };
    case 'SCORE':
      const currentScore = Number(state.score);
      const updateScore = currentScore + action.numWet * 10; // more exciting.
      return {
        ...state,
        score:updateScore,
      };
    case 'CULPRIT':
      return {
        ...state,
        culprit: action.payload,
      };
    case 'SHUFFLE':
    
      // payload is allData, do the following 4 things to it & return some gameData.
      // const { payload } = action;
      const gameData = [
        // 1. shuffle allData,
        shuffleArray,

        // 2. slice off gameData (.length === NUM_DAYS_IN_GAME),
        sliceNumDaysInAGameConst,

        // 3. set all data[checked] to false,
        setCheckedToFalse,

        // 4. add data[numNastyNeighbours] to gameData.
        addNumNastyNeighboursToShuffledData,
      ].reduce((payload, fn) => {
        return fn(payload);
      }, state.allData);

      return {
        ...state,
        data: gameData,
      };

    case 'CHECK_TILE':
      return {
        ...state,
        data: action.payload,
      };
    case 'REVEAL_ALL':
      console.log("reducer")
      const revealed = setCheckedToTrue(state.data);
      return {
        ...state,
        data: revealed
      };

    default:
      return { ...state };
  }
}
