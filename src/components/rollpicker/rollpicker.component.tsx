import React from 'react';
import './rollpicker.styles.css';
import Actionbutton from '../actionbutton/actionbutton.component';


import { RollPickerProps, RollProps } from '../../interfaces/interfaces';

import Roll from '../roll/roll.component';


// use local state to keep track of picked roll 
// the actual picker-menu should be a separate component
// state should live in wrapper component that looks like this:
/**
 * 
 * <RollPicker rolls={defaultRolls}/>
 * <RollPicker rolls={customRolls } //from localStorage />
 * <Actionbutton 
 *  action={state.pickedRoll.rollMethod}
 *  text={state.pickedRoll.rollName}
 * />
 * 
 */

const RollPicker: React.FC<RollPickerProps> = ({rolls}) => {
  return (
    <div className='roll-picker'>
      <select id='default-rolls'>
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
