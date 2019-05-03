import React from 'react';
import PropTypes from 'prop-types';

const RomanNumerals = (props) => {
    return (
      <p id="roman-numeral" tabIndex="0" aria-label="Roman numeral Conversion">{compute(props.input)}</p>
    )
};


const compute = (input) => {
  const numeralMap = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL',
    '50': 'L',
    '90': 'XC',
    '100': 'C',
    '400': 'CD',
    '500': 'D',
    '900': 'CM',
    '1000': 'M'
  };
  let parts = [],
    sliced = parseInt(input);

  const numeralKeys = Object.keys(numeralMap).reverse();

  getParts();
  function getParts () {
    for (let i = 0; i < numeralKeys.length; i++) {
      if (sliced / numeralKeys[i] >= 1) {
        parts.push(numeralKeys[i]);
        sliced = sliced - numeralKeys[i];
        break;
      }
    }

    if (sliced !== 0) {
      getParts();
    }
  }

  return parts.map(num => numeralMap[num]);
};

RomanNumerals.propTypes = {
  input: PropTypes.string
};

export default RomanNumerals;
