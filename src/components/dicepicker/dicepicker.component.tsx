import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import './dicepicker.styles.css';

import Dice from '../dice/dice.component'
import Actionbutton from '../actionbutton/actionbutton.component';
import { DiceType, RollProps, PickerMenuProps } from '../../interfaces/interfaces';
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

const DicePicker: React.FC<PickerMenuProps> = () => {

  const [quickRoll, setQuickRoll] = useState<RollProps | null> (null)

  const clearQuickRoll = () => {
    setQuickRoll(null)
  };
  const createAndSetQuickRoll = (diceType:DiceType) => setQuickRoll(
    new QuickRoll(diceType)
  )

  function incrementDice(e: SyntheticEvent) {
    const target = e.target as HTMLButtonElement;
    const dicetype = target.parentElement?.dataset.dicetype as DiceType;

    if (quickRoll) {
      // Kolla om typen redan finns
      const exists = quickRoll.dice.some(d => d.diceType === dicetype);

      let updatedDice;
      if (exists) {
        // öka qnt på rätt tärning
        updatedDice = quickRoll.dice.map(d =>
          d.diceType === dicetype ? { ...d, qnt: d.qnt + 1 } : d
        );
      } else {
        // lägg till ny tärning
        updatedDice = [...quickRoll.dice, { diceType: dicetype, qnt: 1 }];
      }

      setQuickRoll({
        ...quickRoll,
        dice: updatedDice,
      });
      } else {
      // om quickRoll inte finns, skapa en ny
        createAndSetQuickRoll(dicetype);
    }
  }

  function decrementDice(e: SyntheticEvent) {
    let target = e.target as HTMLButtonElement;
    let dicetype = target.parentElement?.dataset.dicetype as DiceType;

    if (!quickRoll) {
      console.log("No dice to decrement");
      return;
    }

    // Leta efter rätt tärning
    const updatedDice = quickRoll.dice
      .map(diceObj => {
        if (diceObj.diceType === dicetype) {
          return { ...diceObj, qnt: diceObj.qnt - 1 };
        }
        return diceObj;
      })
      // filtrera bort de som har 0 kvar
      .filter(diceObj => diceObj.qnt > 0);

    if (updatedDice.length === 0) {
      // Inga tärningar kvar → nollställ quickRoll
      setQuickRoll(null);
    } else {
      // Uppdatera quickRoll med nya arrayen
      setQuickRoll({
        ...quickRoll,
        dice: updatedDice,
      });
    }
  }

  function handleModifierChange(e:ChangeEvent<HTMLInputElement>) {
    if (quickRoll) {  
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
        <input id='modifier' type='text' size={4} onChange={handleModifierChange} value={quickRoll?.modifier||""}/>
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
