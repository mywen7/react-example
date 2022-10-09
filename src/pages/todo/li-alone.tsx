import React from 'react';

const LiAlone = (props) => {
  return <li>
    <input 
      type="checkbox" 
      checked={props.value.complete} 
      onChange={() => props.onChecked(props.value.text)}
    />
    <span>{props.value.text}</span>
    <button onClick={() => props.onDelLi(props.value.text)}>删除</button>
  </li>
}

export default LiAlone;