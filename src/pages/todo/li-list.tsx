import React from 'react';
import LiAlone from './li-alone';

const LiList = (props) => {
  let renderData;
  switch(props.flag) {
    case 'active': 
      renderData = props.data.filter((ele) => ele.complete === false);
      break;
    case 'complete':
      renderData = props.data.filter((ele) => ele.complete === true);
      break;
    default:
      renderData = props.data;
      break;
  }
  const ele = renderData.map((ele, index) => 
    <LiAlone 
      value={ele} 
      key={index} 
      onDelLi={props.onDelLi}
      onChecked={props.onChecked}
    />
  )
  return <ul>
    { ele }
  </ul>
}

export default LiList;