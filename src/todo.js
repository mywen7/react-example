import React, { useState } from 'react';

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
const Todo = () => {
  const [data, setData] = useState([]);
  const [flag, setFlag] = useState('all');

  const enterKey = (e) => {
    if(e.keyCode === 13) {
      if (e.target.value.length > 0) {
        const newValue = {
          text: e.target.value,
          complete: false,
        }
        setData([...data, newValue])
        e.target.value = '';
      }
    }
  }
  const delLi = (value) => {
    const index = data.findIndex((ele) => ele.text === value);
    const arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }
  const checkedEdit = (value) => {
    const index =  data.findIndex((ele) => ele.text === value);
    const arr = data;
    arr[index].complete = !arr[index].complete;
    setData([...arr]);
  }
  const allChecked = () => {
    let arr;
    const complete = data.map((ele) => ele.complete);
    if(complete.includes(false)) {
      arr = data.map((ele) => {
        return {
          ...ele,
          complete: true,
        }
      })
    } else {
      arr = data.map((ele) => {
        return {
          ...ele,
          complete: false,
        }
      })
    };
    setData([...arr]);
  }
  const delChecked = () => {
    const arr = data.filter((ele) => ele.complete === false);
    setData([...arr]);
  }
  const hasChecked = data.filter((ele) => ele.complete === true).length > 0;
  
  return <>
    <div>todos</div>
    <button onClick={allChecked}>全选</button>
    <input placeholder="What needs to be done" onKeyUp={enterKey}/>
    <LiList 
      data={data} 
      onDelLi={delLi} 
      onChecked={checkedEdit}
      flag={flag}
    />
    <button onClick={() => setFlag('all')}>all</button>
    <button onClick={() => setFlag('active')}>Active</button>
    <button onClick={() => setFlag('complete')}>Complete</button>
    {hasChecked && <button onClick={delChecked}>clear Complete</button>}
  </>
}
export default Todo; 
