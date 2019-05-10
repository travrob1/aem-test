import React from 'react';
import './App.scss';
import RomanNumerals from './RomanNumerals.js';
import locales from '../localization';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.changeLocale = this.changeLocale.bind(this);
  }
  state = {
    valid: false,
    value: '',
    errorMessage: locales.errorMessage
  };

  handleKey = e => {
    const currentTarget = e.currentTarget;
    if (currentTarget.validity.valid === true ) {
      this.setState({valid: true, value: currentTarget.value});
    }  else {
      this.setState({valid: false, value: currentTarget.value});
    }
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h2 className="application-title" aria-label="Application title">{locales.title}</h2>
        </header>
        <div className="app-body">
          <div className="field">
            <input className="search" onKeyUp={this.handleKey} pattern="^([1-9]|[1-9][0-9]|[1-9][0-9][0-9]|1[0-9][0-9][0-9]|2[0-9][0-9][0-9]|3[0-9][0-9][0-9])$" placeholder={locales.inputPlaceholder} type="text" />
            <span className={`validation-message ${this.state.valid === false && this.state.value.length > 0 ? '': ' is-invisible'}`}>{this.state.errorMessage}</span>
          </div>
          {this.state.valid && this.state.value.length > 0 ? <RomanNumerals input={this.state.value}/> : ''}
        </div>
        <div className="filler">
          <p aria-label="Intro to Roman Numerals">{locales.intro}</p>
        </div>
        <footer>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d=" M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z " className="css-c4d79v"/>
            </svg>
            <select name="locales" id="locales" onChange={this.changeLocale} aria-label="Language Switcher">
              <option value="en">English</option>
              <option value="it">Italian</option>
              <option value="es">Spanish</option>
            </select>
          </div>
        </footer>
      </div>
    );
  }

  changeLocale(e) {
    locales.setLanguage(e.currentTarget.value);
    this.setState({errorMessage: locales.errorMessage});
  }
}

export default App;
