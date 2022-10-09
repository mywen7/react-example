import React from 'react';
import Scil from './scil';

const Section = (props) => {
  return <div>
    <div>{props.category}</div>
    {
      props.info.map((ele) => {
        if (props.InStock && !ele.stocked) {
          return null
        }
        return <Scil content={ele} key={ele.name}/>
      })
    }
  </div>
}

export default Section;