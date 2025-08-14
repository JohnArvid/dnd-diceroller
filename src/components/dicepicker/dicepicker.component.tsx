import React from 'react';
import './dicepicker.styles.css';

import Dice from '../dice/dice.component'
import Actionbutton from '../actionbutton/actionbutton.component';

const diceTypes:string[] = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20']

/**
 * När en tärning incrementas första gången skapas ett roll-objekt med den enda tärningen
 * Och standardfunktionen för att slå tärning samt namnet "Quick roll" 
 * Det objektet sätts som pickedRoll <- setPickedRoll behöver importeras.
 * Objektet fylls på allteftersom man lägger till tärningar och modifier
 * Objektet raderas om man decrementar så det är noll tärningar eller klickar på clear roll
 * 
 * ActionButton i Rollpicker visar 'Quick roll' om man inte sparat roll-objektet
 * 
 * Hur hantera namngivningen av roll? popup med overlay? 
 * 
 * Menyn Custom rolls dyker upp först när det finns något sparat i localStorage.
 * 
 * 
 */


const DicePicker: React.FC = () => {
  return (
    <div className='dice-picker'>
      {diceTypes.map((diceType) => {
        return (
        <Dice diceType={diceType} 
        incrementDice={(e)=>(console.log(e.target, diceType + ' incremented'))}
        decrementDice={(e)=>(console.log(e.target, diceType + ' decremented'))}
        key={diceType}
        />
      )
      })}
      <div>
        <label htmlFor="modifier">Modifier:</label>
        <input id='modifier' type='text' size={4}></input>
      </div>
        
      <Actionbutton 
      action={() => console.log('Roll saved')}
      text = {'Save roll'} />
      <Actionbutton 
      action={() => console.log('Roll cleared')}
      text = {'Clear roll'} />
    </div>

  );
};

export default DicePicker;
