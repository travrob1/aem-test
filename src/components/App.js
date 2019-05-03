import React from 'react';
import './App.scss';
import RomanNumerals from './RomanNumerals.js';

class App extends React.Component {
  state = {
    valid: false,
    value: '',
    validityMessage: ''
  };

  handleKey = e => {
    const currentTarget = e.currentTarget;
    if (currentTarget.validity.valid === true ) {
      this.setState({valid: true, value: currentTarget.value});
    }  else {
      this.setState({valid: false, validityMessage: currentTarget.title, value: currentTarget.value});
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/*<h2>ULTIMATE ROMAN NUMBERAL CONVERTER</h2>*/}
          <div className="field">
            <input className="search" onKeyUp={this.handleKey} pattern="^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|3[0-9][0-9][0-9])$" title="Please enter a valid number between 1 and 3,999"/>
            <span className={`validation-message ${this.state.valid === false && this.state.value.length > 0 ? '': ' is-invisible'}`}>{this.state.validityMessage}</span>
          </div>
          {this.state.valid && this.state.value.length > 0 ? <RomanNumerals input={this.state.value}/> : ''}

        </header>
      </div>
    );
  }

}

export default App;
