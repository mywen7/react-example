import React from 'react';

const data = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
];
function Scil(props) {
  return <div>
    <span style={!props.content.stocked ? {color: 'red'} : {}}>
      {props.content.name}
    </span>
    <span>{props.content.price}</span>
  </div>
}
function Section(props) {
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
function Panel(props) {
  const category = new Set(props.data.map((ele) => ele.category))
  return (
    <div>
      <span>Name</span>
      <span>Price</span>
      {
        [...category].map((ele) => {
          const res = props.data.filter((item) => item.category === ele)
          return <Section info={res} category={res[0].category} key={ele} InStock={props.InStock}/>
        })
      }
    </div>
  )
}
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      InStock: false,
      value: data,
    }
  }
  inputChange(e) {
    this.setState({
      searchText: e.target.value,
    })
    this.setState((state) => ({
      value: data.filter((ele) => ele.name.indexOf(state.searchText) !== -1)
    }))
  }
  checkChange() {
    this.setState((state) => ({
      InStock: !state.InStock,
    }))

  }
  render() {
    return <div>
      <input value={this.state.search} onChange={(e) => this.inputChange(e)}/>
      <input type="checkbox" value={this.state.InStock} onChange={() => this.checkChange()}/>
      <Panel data={this.state.value} InStock={this.state.InStock}/>
    </div>
  }
}
export default Search;
