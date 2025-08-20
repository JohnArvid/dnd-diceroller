import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './dicepicker.styles.css';

import Dice from '../dice/dice.component'
import Actionbutton from '../actionbutton/actionbutton.component';
import { DiceType, RollProps } from '../../interfaces/interfaces';
import QuickRoll from '../../utilities/createQuickRoll';
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

  const [quickRoll, setQuickRoll] = useState<RollProps | null> (null)

  const clearQuickRoll = () => setQuickRoll(null);
  const createQuickRoll = (diceType:DiceType) => setQuickRoll(
    new QuickRoll(diceType)
  )

  function incrementDice(e:SyntheticEvent) {
    let target = e.target as HTMLButtonElement
    let dicetype = target.parentElement?.dataset.dicetype
    // kolla om det finns ett osparat roll
    if (quickRoll) {
      // lägg till tärning i quickRoll
      setQuickRoll({
        ...quickRoll
        // uppdatera med hur fan jag ska kolla om det redan finns tärning av denna typ 
        // och i så fall öka på
        // annars skapa ett nytt item i dice arrayen
      })
    } else {
      // om quickRoll inte finns skapa det
      createQuickRoll(dicetype as DiceType)
    }
  }

  function decrementDice(e:SyntheticEvent) {
    console.log(e)
    // kolla om det finns ett osparat roll
    if (quickRoll) {
      // kolla om det finns någon tärning av typen som decrementas, i så fall
      // decrementa och kolla om det finns några tärningar kvar i roll, i så fall
      // gör inget mer, annars
      // ta bort quickRoll
    } else {
      console.log("No dice to decrement")
    }    
  }

  function handleModifierChange(e:ChangeEvent<HTMLInputElement>) {
    console.log(e)
    // kolla om det finns ett osparat roll, 
    if (quickRoll) {  
      // uppdatera modifier i quickRoll
      setQuickRoll({
        ...quickRoll,
        modifier: +e.target.value
      })
    }
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
      action={clearQuickRoll}
      text = {'Clear roll'} />
    </div>

  );
};

export default DicePicker;
