import React from 'react';
import './diceroller.styles.css';

import Results from '../results/results.component';
import DicePicker from '../dicepicker/dicepicker.component';
import RollPicker from '../rollpicker/rollpicker.component';
import Actionbutton from '../actionbutton/actionbutton.component';

interface DicerollerProps {}

const Diceroller: React.FC<DicerollerProps> = ({}) => {
  return (
    <>
      <Results 
        result= {'result'}
        rollInfo= {'rollInfo'}
        />
      <DicePicker />
      <RollPicker />
      <Actionbutton 
      action={() => console.log('Roll saved')}
      text = {'Save roll'} />
      <Actionbutton 
      action={() => console.log('Dice rolled')}
      text = {'Roll dice'} />
    </>
  );
};

export default Diceroller;
