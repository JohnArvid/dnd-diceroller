import React, { SyntheticEvent } from 'react';
import './rollpicker.styles.css';

import { RollPickerProps, RollProps } from '../../interfaces/interfaces';

import Roll from '../roll/roll.component';
import { presetRolls } from '../../utilities/presetRolls';


const RollPicker: React.FC<RollPickerProps> = ({rolls, setPickedRoll, pickedRoll}) => {
  function handleSelectChange(e:SyntheticEvent) {
    setPickedRoll(presetRolls.find((roll)=> {
      const select = e.target as HTMLSelectElement;
      return roll.rollName === select.value}))
    
  }
  
  return (
    <div className='roll-picker'>
      <select onChange={handleSelectChange}>
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
