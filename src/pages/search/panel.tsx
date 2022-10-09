import React from "react";
import Section from "./section";

const Panel = (props) => {
  const category = new Set(props.data.map((ele) => ele.category));
  return (
    <div>
      <span>Name</span>
      <span>Price</span>
      {[...category].map((ele) => {
        const res = props.data.filter((item) => item.category === ele);
        return <Section info={res} category={res[0].category} key={ele} InStock={props.InStock} />;
      })}
    </div>
  );
};

export default Panel;
