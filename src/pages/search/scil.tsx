import React from 'react';

const Scil = (props) => {
  return <div>
    <span style={!props.content.stocked ? {color: 'red'} : {}}>
      {props.content.name}
    </span>
    <span>{props.content.price}</span>
  </div>
}

export default Scil;