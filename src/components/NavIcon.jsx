import React from 'react';
import "./NavBar";

export default function Navicon(props) {
  return (
      <img className='nav-icon'src={ props.icon } alt={`icon${ props.id }`}/>
  )
};