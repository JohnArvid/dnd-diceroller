import React from 'react';
import './diceroller.styles.css';

import Results from '../results/results.component';
import DicePicker from '../dicepicker/dicepicker.component';
import RollPicker from '../rollpicker/rollpicker.component';

import { DicerollerProps, RollProps } from '../../interfaces/interfaces';
import rollDice from '../../utilities/rolldice';


const presetRolls: RollProps[] = [
  {
    rollId: 0,
    rollName: 'Standard',
    dice: [{ qnt: 1, diceType: 'd20' }],
    modifier: 0,
    rollMethod() {
      return rollDice(this.dice[0].diceType)
    }
  },
  {
    rollId: 1,
    rollName: 'Advantage',
    dice: [{ qnt: 2, diceType: 'd20' }],
    modifier: 0,
    rollMethod() {
      let rolls = [];
      for (let i=0; i++; this.dice[0].qnt){
        rolls.push(rollDice(this.dice[0].diceType))
      }
      return Math.max(...rolls)
    }
  },
  {
    rollId: 2,
    rollName: 'Disdvantage',
    dice: [{ qnt: 2, diceType: 'd20' }],
    modifier: 0,
    rollMethod: function():number {
      return 2
    }
  },
  { rollId: 3,
    rollName: 'Emphasis',
    dice: [{qnt: 2, diceType: 'd20'}],
    modifier: 0,
    rollMethod() {
      return 2
    }
  }
];


const Diceroller: React.FC<DicerollerProps> = ({}) => {
  return (
    <>
      <Results 
        result= {'result'}
        rollInfo= {'rollInfo'}
        />
      <div className='pickers'>
      <DicePicker />
      <RollPicker 
        rolls = {presetRolls}/>
      </div>
    </>
  );
};

export default Diceroller;
