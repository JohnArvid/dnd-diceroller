import React from 'react';
import './rollpicker.styles.css';

import Roll from '../roll/roll.component';

interface RollPickerProps {
  // an array of rollObjects with a certain shape <RollObject>.
  // array is constructed of presetRolls and customRolls in localStorage?
}
// Sketch of rollObject
// define all interfaces in src/interfaces/interfaces.ts
const presetRolls = [
  {
    rollId: 0,
    rollName: 'Standard',
    dice: [{ qnt: 1, diceType: 'd20' }],
    modifier: 0,
  },
  {
    rollId: 1,
    rollName: 'Advantage',
    dice: [{ qnt: 2, diceType: 'd20' }],
    modifier: 0,
  },
  {
    rollId: 2,
    rollName: 'Disdvantage',
    dice: [{ qnt: 2, diceType: 'd20' }],
    modifier: 0,
  },
];

const RollPicker: React.FC<RollPickerProps> = ({}) => {
  return (
    // Should instead map() over array of presetRolls (objects)
    // and customRolls (objects saved in localStorage)
    // and return a <Roll> for every item
    // props should be the entire rollObject?
    <Roll /*key = {id}*/ rollName="advantage" />
  );
};

export default RollPicker;
