import React, {useState} from 'react';
import Button from '../Button'
import './style.scss';



export interface Props {
    hour: number;
    changeHour: Function;
    isSelected: boolean;
}


const HourCard = ({hour, changeHour, isSelected} : Props) => {
  return (
    <div className="hourCardWrapper">
      <div className="numberWrapper">HOUR: <span>{hour}</span></div> 
    <Button
      text="Choose"
      isPrimary={false}
      onClick={()=> {changeHour()}}
      isSelected={isSelected}
      />
    </div>
  );

}

export default HourCard;
