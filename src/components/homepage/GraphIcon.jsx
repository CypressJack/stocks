import React from 'react';

export default function GraphIcon(props){
  return (
    <button onClick={ props.onClick } className='graph-button'>
      <img src={ props.icon } alt={ props.id }/>
    </button>
  );
};