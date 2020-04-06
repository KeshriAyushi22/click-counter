import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super();
  this.state={
    click:0
  }}
  
click=()=>{
  this.setState({
    click : this.state.click+1
  });
}

  render(){
  return (
    <div className="App">
      <div>
       this is clicked {this.state.click} times
      </div>
      <button onClick={this.click}>click</button>
    </div>
  );
  }
}

export default App;
