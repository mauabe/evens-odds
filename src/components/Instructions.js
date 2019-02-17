import React from 'react';
import { connect } from 'react-redux';
import { expandInstructions, collapseInstructions } from '../actions/settings';

const Instructions = props => {
  const {instructionsExpanded, expandInstructions, collapseInstructions } = props;

  console.log('instructionsExpanded from instructions: ', instructionsExpanded);


  if(instructionsExpanded){
    return(
      <div>
        <h3>Instructions</h3>
        <p> Welcome to Evens or Odds.</p>
        <p>The game goes like this:</p>
        <p>The deck of cards is shuffled. You try to guess if the next card will be even or odd.</p>
        <p> Make a choice on every draw, and see how many you get right.
        </p>
        <p> Face cards  don't count.</p>
        <br />
        <button onClick={collapseInstructions}>Show less</button>
      </div>
    );
  }
  return(
    <div>
      <h3>Instructions</h3>
      <p> Welcom to Evens or Odds.</p>
      <p>The game goes like this:</p>
      <button onClick={expandInstructions}>Read more</button>
    </div>
  )
}

export default connect(
  state => ({instructionsExpanded: state.instructionsExpanded }),
  { expandInstructions, collapseInstructions }
)(Instructions);

//commited 5:38