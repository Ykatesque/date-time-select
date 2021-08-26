import React from 'react';
import './style.scss';

export interface Props {
  text: string;
  isPrimary?: boolean;
  onClick: Function;
  isSelected?: boolean;
}
const Button = ({text, isSelected, onClick, isPrimary = true, }: Props) => {
  return (
    isPrimary ? 
      <button onClick={() => onClick()} className={ isSelected ? "btn primary selected" :"btn primary" }> {text} </button>
    : 
      <button  onClick={() => onClick()} className={ isSelected ? "btn secondary selected" : "btn secondary" }>
        {text}
      </button>
  );
};

export default Button;
