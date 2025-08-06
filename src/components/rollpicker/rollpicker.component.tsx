import React from 'react';
import './rollpicker.styles.css';


import { RollPickerProps, RollProps } from '../../interfaces/interfaces';

import Roll from '../roll/roll.component';


// Sketch of rollObject
// define all interfaces in src/interfaces/interfaces.ts


const RollPicker: React.FC<RollPickerProps> = ({rolls}) => {
  return (
    <>
      {rolls.map((roll:RollProps)=> (
        <Roll key = {roll.rollId} rollId={roll.rollId} rollMethod={roll.rollMethod} rollName={roll.rollName} dice = {roll.dice} modifier={roll.modifier}
    />
    ))}
    </>
  );
};

export default RollPicker;
