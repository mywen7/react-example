import React from "react";
import Panel from "./panel";

const data = [
  { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

interface IData {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}
interface IState {
  searchText: string;
  InStock: string;
  value: IData[];
}

interface IProps {}

class Search extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      InStock: "",
      value: data,
    };
  }

  inputChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
    this.setState((state) => ({
      value: data.filter((ele) => ele.name.indexOf(state.searchText) !== -1),
    }));
  };
  checkChange = (e) => {
    this.setState({
      InStock: e.target.checked,
    });
  };
  render() {
    return (
      <div>
        <input value={this.state.searchText} onChange={this.inputChange} />
        <input type="checkbox" value={this.state.InStock} onChange={this.checkChange} />
        <Panel data={this.state.value} InStock={this.state.InStock} />
      </div>
    );
  }
}

export default Search;
