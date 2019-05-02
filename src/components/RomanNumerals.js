import React from 'react';
import PropTypes from 'prop-types';

export default class RomanNumerals extends React.Component {
  constructor(props) {
    super(props);

    this.numeralMap = {
      '1': 'I',
      '5': 'V',
      '10': 'X',
      '50': 'L',
      '100': 'C',
      '500': 'D',
      '1000': 'M'
    };

  }
  render() {
    return (
      <p>{this.compute(this.props.input)}</p>
    )
  }

  compute(input) {
    debugger;
    let res = '',
      sliced = input;

    const numeralKeys = Object.keys(this.numeralMap);

    for (let i = 0; i < numeralKeys.length; i++) {
      if (sliced / numeralKeys[i] <= 1) {
        res += this.numeralMap[numeralKeys[i]];
      }
    }

    return res;







  }
}

RomanNumerals.propTypes = {
  input: PropTypes.string
};
