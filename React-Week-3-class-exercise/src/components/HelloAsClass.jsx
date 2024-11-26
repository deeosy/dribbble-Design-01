import { Component } from "react";

export class HelloAsClass extends Component {
  render() {
    return <div className="">
      Hello, { this.props.who} !
    </div>
  }
}



