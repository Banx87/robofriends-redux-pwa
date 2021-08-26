import React, { Component } from "react";
import CounterBtn from "../CounterBtn/CounterBtn";
import CounterBtn2 from "../CounterBtn2/CounterBtn2";
import "../../index.css";

class Header extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //     return false;
  // }
  render() {
    // console.log("Header Rendered")
    return (
      <div>
        <h1 className="f1">RoboFriends Redux</h1>
        <CounterBtn color={"red"} />
        <CounterBtn2 />
      </div>
    );
  }
}

export default Header;
