import React from 'react';
import RomanNumerals from './RomanNumerals';
import Enzyme , {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<RomanNumerals />', () => {
  it('Should return V when 5 is passed in', () => {
    const wrapper = shallow(<RomanNumerals input="5"/>);
    expect(wrapper.find('p').text()).toEqual('V');
  });

  it('Should return MMMCMXCIX when 3999 is passed in', () => {
    const wrapper = shallow(<RomanNumerals input="3999"/>);
    expect(wrapper.find('p').text()).toEqual('MMMCMXCIX');
  });

  it('Should return XL when 40 is passed in', () => {
    const wrapper = shallow(<RomanNumerals input="40"/>);
    expect(wrapper.find('p').text()).toEqual('XL');
  });

  it('Should return CCLV when 255 is passed in', () => {
    const wrapper = shallow(<RomanNumerals input="255"/>);
    expect(wrapper.find('p').text()).toEqual('CCLV');
  });

  it('Should return MMXVIII when 2018 is passed in', () => {
    const wrapper = shallow(<RomanNumerals input="2018"/>);
    expect(wrapper.find('p').text()).toEqual('MMXVIII');
  });

});
