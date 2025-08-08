import React from 'react';
import './dicepicker.styles.css';

import Dice from '../dice/dice.component'
import Actionbutton from '../actionbutton/actionbutton.component';

interface DicePickerProps {

}

const DicePicker: React.FC<DicePickerProps> = () => {
  return (
    <div className='dice-picker'>
     <Dice 
      diceType='d20'
      incrementDice={(e)=>(console.log(e.target, ' incremented'))}
      decrementDice={(e)=>(console.log(e.target, ' decremented'))}
     />
     <Dice 
      diceType='d12'
      incrementDice={(e)=>(console.log(e.target, ' incremented'))}
      decrementDice={(e)=>(console.log(e.target, ' decremented'))}
     />
      <Actionbutton 
      action={() => console.log('Roll saved')}
      text = {'Save roll'} />
    </div>
  );
};

export default DicePicker;
