import { DECK, DECK_DRAW } from './types';

const API_ADDRESS = 'https://deck-of-cards-api-wrapper.appspot.com'

/*
!!! this url matches the beat-cors url !!!
https://cors-anywhere.herokuapp.com/https://deckofcardsapi.com/api
http://localhost:3000/https://deckofcardsapi.com/api'
https://cors-anywhere.herokuapp.com/https://deck-of-cards-api-wrapper.appspot.com
https://deck-of-cards-api-wrapper.appspot.com';
https://deckofcardsapi.com/api/
*/

export const fetchDeckSuccess = deckJson => {
  const { remaining, deck_id } = deckJson;

  return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}

export const fetchDeckError = error => {
  return { type: DECK.FETCH_ERROR, message: error.message };
}

export const fetchNewDeck = () => dispatch => {
  return fetch(`${API_ADDRESS}/deck/new/shuffle`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Unsuccessful request to deckofcardsapi.com');
      }

      return response.json();
    })
    .then(json => dispatch(fetchDeckSuccess(json)))
    .catch(error => dispatch(fetchDeckError(error)));
}

export const fetchDrawCard = deck_id => dispatch => {
  return fetch(`${API_ADDRESS}/deck/${deck_id}/draw`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error('Unsuccessful request to deckofcardsapi.com');
      }

      return response.json();
    })
    .then(json => {
      dispatch({
        type: DECK_DRAW.FETCH_SUCCESS,
        cards: json.cards,
        remaining: json.remaining
      });
    })
    .catch(error => dispatch({ type: DECK_DRAW.FETCH_ERROR, message: error.message }));
}