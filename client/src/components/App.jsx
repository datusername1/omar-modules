import React, { Component } from "react";

export default class App extends Component{
  constructor(props){
    super(props),
    this.state = {
      todo:""
    }
  }

  render(){
    return(
      <div>
        <h1>Hello there</h1>
      </div>
    )
  }
}
