import React from'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './components/App';
import './index.css';

const DEFAULT_SETTINGS = {
    gameStarted: false,
    instructionsExpanded: false
}

const SET_GAME_STARTED = 'SET_GAME_STARTED';

const SET_INSTRUCTIONS_EXPANDED = 'SET_INSTRUCTIONS_EXPANDED';

const rootReducer = (state = DEFAULT_SETTINGS, action) => {
  console.log('state', state, 'action', action)

  switch(action.type){
    case SET_GAME_STARTED:
      return{ ...state, gameStarted: action.gameStarted}
        //instructionsExpanded: state.instructionsExpanded
    case SET_INSTRUCTIONS_EXPANDED:
      return{ ...state, instructionsExpanded: action.instructionsExpanded}
        //gameStarted: state.gameStarted,
    default: 
      return state;
  }
}

const store = createStore(rootReducer);

// console.log('store', store);
// console.log('store.getState()', store.getState() );

store.subscribe(() => console.log('store.getState()', store.getState() ) );

const startGame = () => {
  return {type: SET_GAME_STARTED, gameStarted: true };
};

const cancelGame = () => {
  return {type: SET_GAME_STARTED, gameStarted: false };
}

const expandInstructions = () => {
  return { SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true }
}

const cancelInstructions = () => {
  return { SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false }
}

const action1 = {gameStarted: true, type: SET_GAME_STARTED };


store.dispatch(startGame());
store.dispatch(expandInstructions());
store.dispatch(cancelGame());
store.dispatch(cancelInstructions());



ReactDOM.render(<App />, document.getElementById('root'));


