import React from 'react';
import './diceroller.styles.css';

import Results from '../results/results.component';
import DicePicker from '../dicepicker/dicepicker.component';
import PickerMenu from '../pickermenu/pickermenu.component';

import { DicerollerProps } from '../../interfaces/interfaces';




const Diceroller: React.FC<DicerollerProps> = ({}) => {
  return (
    <>
      <Results 
        result= {'result'}
        rollInfo= {'rollInfo'}
        />
      <div className='pickers'>
      <DicePicker />
      <PickerMenu />
      </div>
    </>
  );
};

export default Diceroller;
