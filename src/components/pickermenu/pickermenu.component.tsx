import React from 'react';
import './pickermenu.styles.css';
import RollPicker from '../rollpicker/rollpicker.component';
import Actionbutton from '../actionbutton/actionbutton.component';
import { PickerMenuProps } from '../../interfaces/interfaces';
import { presetRolls } from '../../utilities/presetRolls';


const PickerMenu: React.FC<PickerMenuProps> = (props) => {
  return (
    <div>
    <RollPicker pickedRoll={props.pickedRoll} setPickedRoll={props.setPickedRoll} rolls={presetRolls}/>
    <Actionbutton 
    // Update based on picked roll, default is standard
      action={() => props.setResult(props.pickedRoll.rollMethod())}
      // Update based on picked roll 
      text = {"Roll " + props.pickedRoll.rollName} />
    </div>
  );
};

export default PickerMenu;
