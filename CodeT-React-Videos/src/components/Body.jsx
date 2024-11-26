import React, { Component } from "react";
import Button from "./Button";

class Body extends Component{
  render(){
    return(
      <div className="">
        <h1>Body</h1>
        <Button title="I Am a Button" age={54} handleClick={()=> console.log("Button Clicked")} color="red-200"/>
        <Button title="Click Me" color="green-200"/>
        <Button title="Look Left" color="blue-200"/>
      </div>
    )
  }
}

export default Body;