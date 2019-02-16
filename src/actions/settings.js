import { SET_GAME_STARTED, SET_INSTRUCTIONS_EXPANDED } from './types';

export const startGame = () => {
  return {type: SET_GAME_STARTED, gameStarted: true };
};

export const cancelGame = () => {
  return {type: SET_GAME_STARTED, gameStarted: false };
}

export const expandInstructions = () => {
  return { SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: true }
}

export const collapseInstructions = () => {
  return { SET_INSTRUCTIONS_EXPANDED, instructionsExpanded: false }
}