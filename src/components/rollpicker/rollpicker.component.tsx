import React from 'react';
import './rollpicker.styles.css';

import { RollPickerProps, RollProps } from '../../interfaces/interfaces';

import Roll from '../roll/roll.component';


const RollPicker: React.FC<RollPickerProps> = ({rolls}) => {
  return (
    <div className='roll-picker'>
      <select>
      {rolls.map((roll:RollProps)=> (
        <Roll 
        key = {roll.rollId} 
        rollId={roll.rollId} 
        rollMethod={roll.rollMethod} 
        rollName={roll.rollName} 
        dice = {roll.dice} 
        modifier={roll.modifier}
    />
    ))}
    </select>
    </div>
  );
};

export default RollPicker;
