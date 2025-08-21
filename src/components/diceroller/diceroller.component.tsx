import React, { useState } from 'react';
import './diceroller.styles.css';

import Results from '../results/results.component';
import DicePicker from '../dicepicker/dicepicker.component';
import PickerMenu from '../pickermenu/pickermenu.component';
import { presetRolls } from '../../utilities/presetRolls';
import { DicerollerProps } from '../../interfaces/interfaces';



const Diceroller: React.FC<DicerollerProps> = ({}) => {
  let [pickedRoll, setPickedRoll] = useState(presetRolls[0]);
  let [result, setResult] = useState('');
  return (
    <>
      <Results 
        result= {result}
        rollInfo= {pickedRoll}
        />
      <div className='pickers'>
      <DicePicker pickedRoll={pickedRoll} setPickedRoll={setPickedRoll} setResult={setResult}/>
      <PickerMenu pickedRoll={pickedRoll} setPickedRoll={setPickedRoll} setResult={setResult}/>
      </div>
    </>
  );
};

export default Diceroller;
