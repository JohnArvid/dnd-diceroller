import React from 'react';
import './pickermenu.styles.css';
import RollPicker from '../rollpicker/rollpicker.component';
import Actionbutton from '../actionbutton/actionbutton.component';

import { presetRolls } from '../../utilities/presetRolls';




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

const PickerMenu: React.FC = () => {
  return (
    <div>
    <RollPicker rolls={presetRolls}/>
    <Actionbutton 
    // Update based on picked roll, default is standard
      action={() => console.log('Dice rolled')}
      // Update based on picked roll 
      text = {'Roll dice'} />
    </div>
  );
};

export default PickerMenu;
