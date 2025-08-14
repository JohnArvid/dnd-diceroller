import React from 'react';
import './dicepicker.styles.css';

import Dice from '../dice/dice.component'
import Actionbutton from '../actionbutton/actionbutton.component';

const diceTypes:string[] = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20']

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
    </div>

  );
};

export default DicePicker;
