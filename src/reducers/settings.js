import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from '../actions/types';

const DEFAULT_SETTINGS = {
  gameStarted: false,
  instructionsExpanded: false
};


const settingsReducer = (state = DEFAULT_SETTINGS, action) => {
  switch(action.type) {
    case SET_GAME_STARTED:
      return { ...state, gameStarted: action.gameStarted };
        //instructionsExpanded: state.instructionsExpanded
    case SET_INSTRUCTIONS_EXPANDED:
      return { ...state, instructionsExpanded: action.instructionsExpanded };
        //gameStarted: state.gameStarted,
    default:
      return state;
    }
  };
  
export default settingsReducer;  
