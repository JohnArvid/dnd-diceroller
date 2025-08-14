import React, { useState } from 'react';
import './diceroller.styles.css';

import Results from '../results/results.component';
import DicePicker from '../dicepicker/dicepicker.component';
import PickerMenu from '../pickermenu/pickermenu.component';
import { presetRolls } from '../../utilities/presetRolls';
import { DicerollerProps } from '../../interfaces/interfaces';



const Diceroller: React.FC<DicerollerProps> = ({}) => {
  let [pickedRoll, setPickedRoll] = useState(presetRolls[0]);
  return (
    <>
      <Results 
        result= {'result'}
        rollInfo= {'rollInfo'}
        />
      <div className='pickers'>
      <DicePicker />
      <PickerMenu pickedRoll={pickedRoll} setPickedRoll={setPickedRoll}/>
      </div>
    </>
  );
};

export default Diceroller;
