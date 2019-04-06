import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  
  handleUserInput(e){
    let value = e.target.value;
    this.setState({userInput: value});
  }
  
  render() {
    return (
      <div>
        <input 
          type="text" 
          onChange={this.handleUserInput}
          value={this.state.userInput}
      		/>
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default Input;

