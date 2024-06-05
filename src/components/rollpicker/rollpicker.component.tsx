import React from 'react';
import './rollpicker.styles.css';

import Roll from '../roll/roll.component';

interface RollPickerProps {
  // an array of rollObjects with a certain shape.
}

const RollPicker: React.FC<RollPickerProps> = ({}) => {
  return (
    // Should instead map() over array of rollObjects 
    // and return a <Roll> for every item
    <Roll /*key = {id}*/ rollName="advantage" />
  );
};

export default RollPicker;
