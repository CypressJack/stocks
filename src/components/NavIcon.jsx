import React from 'react';
import "./NavBar";

export default function Navicon(props) {
  return (
    <button onClick={props.onClick} className='nav-icon-button'>
      <img className='nav-icon'src={ props.icon } alt={`icon${ props.id }`}/>
    </button>
  )
};