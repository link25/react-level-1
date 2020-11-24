import React, { Component } from "react";
import ReactDOM from "react-dom";

//Creating a class component who contains 5 checkboxes initilized as unchecked
class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChecked: false,
      list: [
        { id: 1, name: "item1", isChecked: false },
        { id: 2, name: "item2", isChecked: false },
        { id: 3, name: "item3", isChecked: false },
        { id: 4, name: "item4", isChecked: false },
        { id: 5, name: "item 5", isChecked: false },
      ],
    };
  }


  render() {
    return (
      <div>
        <input />
        Select All
        <br />
      </div>
    );
  }
}

ReactDOM.render(<CheckBox />, document.getElementById("root"));

export default CheckBox;