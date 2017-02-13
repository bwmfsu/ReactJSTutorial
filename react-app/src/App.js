import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
constructor() {
  super();
  this.state = {
    txt: "this is the first state for text",
    cat: 5
  }
}
  update(e) {
    this.setState({txt: e.target.value});
  }

  render() {
    let txt = this.props.txt
    return (
      <div>
        <h1>Hello React!!</h1>
        <div>Value of text state: <b>{this.state.txt}</b></div>
        <div>Value of other property: <b>{this.props.other}</b></div>
      <br />
        <Widgets update={this.update.bind(this)} />
        <Button>React makes me <Smiley /> {this.state.txt}</Button>
      </div>
    );
  }
}
  
App.propTypes = {
  other: React.PropTypes.number.isRequired
}

App.defaultProps = {
  other: 15
}

const Widgets = (props) => 
<div>
        <input type="text" onChange={props.update} />
        <input type="text" onChange={props.update} />
        <input type="text" onChange={props.update} />
        <input type="text" onChange={props.update} />
        <input type="text" onChange={props.update} />
        <input type="text" onChange={props.update} />
        </div>

class Button extends React.Component {
  render() {
    return (
      <div>
        <button>{this.props.children}</button>
        <div style={{"fontSize": "2em"}}># children properties: {React.Children.count(this.props.children)}</div>
      </div>
    );
  }
} 

class Smiley extends React.Component {
  render() {
    return (<span>&#9786;</span>);
  }
}

export default App;
