import React, { SyntheticEvent } from 'react';
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

  function incrementDice(e:SyntheticEvent) {
    console.log(e)
    // kolla om det finns ett osparat roll
    // om inte skapa det, annars
    // lägg till tärning i quickRoll
  }

  function decrementDice(e:SyntheticEvent) {
    console.log(e)
    // kolla om det finns ett osparat roll
    // om inte, gör inget, annars
    // kolla om det finns någon tärning av typen som decrementas, i så fall
    // decrementa och kolla om det finns några tärningar kvar i roll, i så fall
    // gör inget mer, annars
    // ta bort quickRoll
  }

  function handleModifierChange(e:SyntheticEvent) {
    console.log(e)
    // kolla om det finns ett osparat roll, 
    // om inte, gör inget, annars
    // uppdatera modifier i quickRoll
  }

  return (
    <div className='dice-picker'>
      {diceTypes.map((diceType) => {
        return (
        <Dice diceType={diceType} 
        incrementDice={incrementDice}
        decrementDice={decrementDice}
        key={diceType}
        />
      )
      })}
      <div>
        <label htmlFor="modifier">Modifier:</label>
        <input id='modifier' type='text' size={4} onChange={handleModifierChange}></input>
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
