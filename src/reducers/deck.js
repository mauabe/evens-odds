import { DECK, DECK_DRAW } from '../actions/types';
import fetchStates from './fetchStates';

const DEFAULT_DECK = { deck_id: '', remaining: 0, fetchState: '', message: '', cards: [] };

const deckReducer = (state = DEFAULT_DECK, action) => {
  let remaining, deck_id, cards;

  switch(action.type){
    case DECK.FETCH_SUCCESS:
      ({ remaining, deck_id } = action);
      // remaining = action.remaining;
      // deck_id = action.deck_id;
      return { ...state, remaining, deck_id, fetchState: fetchStates.success };
    case DECK.FETCH_ERROR:
      return { ...state, message: action.message, fetchState: fetchStates.error };
    case DECK_DRAW.FETCH_SUCCESS:
      ({ cards, remaining} = action );
      return { ...state, cards, remaining, fetchState: fetchState.success };
    case DECK_DRAW.FETCH_ERROR:
     return { ...state, cards, remaining, fetchState: fetchState.success };
    default: 
      return state;
  }
};

export default deckReducer;
