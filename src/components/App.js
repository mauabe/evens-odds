import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import Instructions from './Instructions';
import fetchStates from '../reducers/fetchStates';
class App extends Component{
  startGame = () =>{
    this.props.startGame()
    this.props.fetchNewDeck()
  }

  render(){

    if(this.props.fetchState === fetchStates.error){
      return(
        <div>
          <p>An error occurred, please try reloading the app</p>
          <p>{this.props.message}</p>
        </div>
      )
    }

    return(
      <div> 
        <h2> ♣️ ♦️ Evens or Odds ♠️ ♥️ </h2>
        {
          this.props.gameStarted ? (
            <div>
              <h3> The game is on!</h3>
              <br />
              <button onClick={this.props.cancelGame}> Cancel Game </button>
            </div>
          ) : (
            <div>
              <h3>A new game awaits</h3>
              <br />
              <button onClick={this.startGame}> Start Game </button>
              <hr />
              <Instructions />
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = state => {
  // const { gameStarted, fetchState, message } = state.settings;
  // const {fetchState, message } = state.deck;

  const{
    settings: { gameStarted },
    deck: { fetchState, message}
  } = state;

  return{ gameStarted, fetchState, message };
}

// const mapDispatchToProps = dispatch => {
//   return {
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNeweck: () => fetchNewDeckResult(dispatch)
//   }
// }

const componentConnector = connect(
  mapStateToProps,
  { startGame, cancelGame, fetchNewDeck }
  );

export default componentConnector(App);

//commited 5:38